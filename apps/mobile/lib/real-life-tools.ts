import { chatCompleteDetailed } from "./llm-router";
import { checkMayaOutput, checkUserInput } from "./safety-filter";

export interface EmergencyAnswers {
  formal: string;
  neutral: string;
  friendly: string;
  source: "ai" | "fallback";
}

export interface CustomScenarioTurn {
  speaker: "npc" | "user";
  message?: string;
  model_answers?: string[];
  acceptable_patterns?: string[];
  hint_tr?: string;
}

export interface CustomScenario {
  titleTr: string;
  descriptionTr: string;
  npcRole: string;
  settingTr: string;
  turns: CustomScenarioTurn[];
  source: "ai" | "fallback";
}

const EMERGENCY_SYSTEM = `You are an expert English coach for adult Turkish speakers. Convert the user's Turkish intent into exactly three natural English messages: formal, neutral, and friendly. Preserve meaning and never invent names, dates, times, or promises. Return JSON only: {"formal":"...","neutral":"...","friendly":"..."}`;

const CUSTOM_SYSTEM = `Create a realistic adult two-turn English roleplay from the user's Turkish situation, pasted message, or meeting topic. Return JSON only with titleTr, descriptionTr, npcRole, settingTr and exactly five alternating turns starting with npc and ending with a non-question npc acknowledgement. User turns must contain two or three short modelAnswers strings and a Turkish hintTr.`;

function extractObject(text: string): Record<string, unknown> | null {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start < 0 || end <= start) return null;
  try {
    const parsed = JSON.parse(text.slice(start, end + 1));
    return parsed && typeof parsed === "object"
      ? (parsed as Record<string, unknown>)
      : null;
  } catch {
    return null;
  }
}

function shortString(value: unknown, max = 320): string | null {
  if (typeof value !== "string") return null;
  const clean = value.trim();
  return clean.length > 0 && clean.length <= max ? clean : null;
}

export function parseEmergencyAnswers(text: string): EmergencyAnswers | null {
  const value = extractObject(text);
  if (!value) return null;
  const formal = shortString(value.formal);
  const neutral = shortString(value.neutral);
  const friendly = shortString(value.friendly);
  if (!formal || !neutral || !friendly) return null;
  return { formal, neutral, friendly, source: "ai" };
}

function normalizeTr(value: string): string {
  const turkishMap: Record<string, string> = {
    ç: "c",
    Ç: "c",
    ğ: "g",
    Ğ: "g",
    ı: "i",
    İ: "i",
    ö: "o",
    Ö: "o",
    ş: "s",
    Ş: "s",
    ü: "u",
    Ü: "u",
  };
  return value
    .replace(/[çÇğĞıİöÖşŞüÜ]/g, (char) => turkishMap[char] ?? char)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/['"`]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

interface FallbackPlan {
  intent: string;
  titleTr: string;
  descriptionTr: string;
  npcRole: string;
  settingTr: string;
  formal: string;
  neutral: string;
  friendly: string;
  opener: string;
  followUp: string;
  closing: string;
  firstHintTr: string;
  secondAnswers: string[];
  secondHintTr: string;
}

function oneLine(value: string, fallback: string): string {
  const clean = value.trim().replace(/\s+/g, " ");
  return clean || fallback;
}

function detectTimePhrase(input: string): string {
  const match = input.match(/\b(\d{1,3})\s*(dakika|dk|min|minute|minutes)\b/i);
  return match ? `about ${match[1]} minutes` : "a little";
}

function detectChannel(text: string): string {
  if (/whatsapp|mesaj|message|dm|sms/.test(text)) return "WhatsApp";
  if (/mail|email|e posta|e-posta/.test(text)) return "Email";
  if (/telefon|arama|call/.test(text)) return "Phone";
  return "Real life";
}

function variants(...answers: string[]): string[] {
  const seen = new Set<string>();
  return answers
    .map((answer) => answer.trim())
    .filter((answer) => {
      if (!answer || seen.has(answer.toLowerCase())) return false;
      seen.add(answer.toLowerCase());
      return true;
    })
    .slice(0, 3);
}

function defaultSecondAnswers(intent: string): string[] {
  if (intent === "late") {
    return variants(
      "I will keep you updated if anything changes.",
      "I should be there as soon as possible.",
      "Thank you for understanding.",
    );
  }
  if (intent === "reschedule" || intent === "cancel") {
    return variants(
      "I can do tomorrow afternoon if that works for you.",
      "Please let me know what time works best.",
      "I am flexible with the new time.",
    );
  }
  if (intent === "raise") {
    return variants(
      "Over the past months, I have taken on more responsibility and delivered strong results.",
      "I would like to discuss a fair adjustment based on my recent impact.",
      "I can share specific examples of the work I have done.",
    );
  }
  if (intent === "complaint" || intent === "refund") {
    return variants(
      "Could you please help me fix this or explain the next step?",
      "I would appreciate a clear solution.",
      "If possible, I would like this resolved today.",
    );
  }
  return variants(
    "I can share more details if needed.",
    "Please let me know what would work best.",
    "Thank you for understanding.",
  );
}

function buildPlan(input: string): FallbackPlan {
  const text = normalizeTr(input);
  const description = oneLine(input.slice(0, 180), "Kısa gerçek hayat provası");
  const channel = detectChannel(text);
  const lateAmount = detectTimePhrase(input);

  if (/maas|zam|ucret|salary|raise|compensation|promotion/.test(text)) {
    return {
      intent: "raise",
      titleTr: "Maaş görüşmesi provası",
      descriptionTr: description,
      npcRole: "Manager",
      settingTr: "Work meeting",
      formal:
        "I would like to discuss my compensation and the value I have been adding to the team.",
      neutral:
        "I would like to talk about a salary adjustment based on my recent work.",
      friendly:
        "Could we talk about my salary and the extra responsibility I have taken on?",
      opener:
        "Thanks for setting up this meeting. What would you like to discuss?",
      followUp:
        "What makes you feel this is the right time for that conversation?",
      closing:
        "Thanks for explaining it clearly. I will think about the next step.",
      firstHintTr: "Konuyu doğrudan ama saygılı aç.",
      secondAnswers: defaultSecondAnswers("raise"),
      secondHintTr: "Değerini somut sonuçlarla anlat.",
    };
  }

  if (/gecik|gec kal|yetisem|late|delay|trafik/.test(text)) {
    return {
      intent: "late",
      titleTr: "Geç kalma mesajı",
      descriptionTr: description,
      npcRole: /patron|mudur|manager|boss/.test(text)
        ? "Manager"
        : "Conversation partner",
      settingTr: channel,
      formal: `I wanted to let you know that I am running ${lateAmount} late. I apologize for the delay and will keep you updated.`,
      neutral: `I am running ${lateAmount} late. I will keep you posted.`,
      friendly: `I am running ${lateAmount} late, sorry. I will message you when I am close.`,
      opener: "Hi, are you still on your way?",
      followUp: "No problem. Do you know when you will arrive?",
      closing: "All right, thanks for letting me know.",
      firstHintTr: "Gecikeceğini kısa ve net söyle.",
      secondAnswers: defaultSecondAnswers("late"),
      secondHintTr: "Tahmini zamanı veya haber vereceğini söyle.",
    };
  }

  if (/ertele|tarihi degis|yeniden plan|baska gun|reschedule|postpone/.test(text)) {
    return {
      intent: "reschedule",
      titleTr: "Erteleme konuşması",
      descriptionTr: description,
      npcRole: /musteri|client|customer/.test(text) ? "Client" : "Colleague",
      settingTr: channel,
      formal:
        "Would it be possible to reschedule? Please let me know what time works best for you.",
      neutral: "Could we move this to another time? What works for you?",
      friendly: "Can we move this? Tell me what time suits you.",
      opener: "Hi, I saw your message. What did you want to change?",
      followUp: "Sure. What time would work better for you?",
      closing: "That works. Thanks for checking with me.",
      firstHintTr: "Erteleme isteğini nazikçe söyle.",
      secondAnswers: defaultSecondAnswers("reschedule"),
      secondHintTr: "Alternatif zaman öner veya karşı tarafa sor.",
    };
  }

  if (/iptal|gelemeyeceg|cancel|cant come|cannot come/.test(text)) {
    return {
      intent: "cancel",
      titleTr: "Plan iptali",
      descriptionTr: description,
      npcRole: "Conversation partner",
      settingTr: channel,
      formal:
        "I am sorry, but I need to cancel our plan. I apologize for the inconvenience.",
      neutral: "I am sorry, but I cannot make it today. Can we plan another time?",
      friendly: "Sorry, I cannot make it today. Can we do another time?",
      opener: "Hi, are we still good for today?",
      followUp: "Thanks for telling me. Do you want to pick another time?",
      closing: "No worries. We can find another time.",
      firstHintTr: "İptali net söyle ve özür dile.",
      secondAnswers: defaultSecondAnswers("cancel"),
      secondHintTr: "Yeni zaman için kapı açık bırak.",
    };
  }

  if (/hasta|iyi hisset|rahatsiz|doctor|doktor|clinic|hospital/.test(text)) {
    const medical = /doctor|doktor|clinic|hospital/.test(text);
    return {
      intent: "sick",
      titleTr: "Rahatsızlık açıklaması",
      descriptionTr: description,
      npcRole: medical ? "Receptionist" : "Manager",
      settingTr: medical ? "Clinic" : channel,
      formal:
        "I am not feeling well today, so I may need some time to recover. Thank you for understanding.",
      neutral: "I am not feeling well today. I need some time to rest.",
      friendly: "I am feeling under the weather today, so I am going to rest.",
      opener: "Hi, how can I help you today?",
      followUp: "I understand. Is there anything urgent I should know?",
      closing: "Okay, please take care.",
      firstHintTr: "Rahatsız olduğunu sade bir cümleyle söyle.",
      secondAnswers: variants(
        "I will let you know if I need anything else.",
        "I need to rest today and I will update you later.",
        "Could we keep this brief for now?",
      ),
      secondHintTr: "Sonraki ihtiyacı veya güncelleme vereceğini söyle.",
    };
  }

  if (/ozur|kusura bak|yanlis anla|sorry|apolog/.test(text)) {
    return {
      intent: "apology",
      titleTr: "Özür ve düzeltme",
      descriptionTr: description,
      npcRole: "Conversation partner",
      settingTr: channel,
      formal: "I apologize for the misunderstanding. That was not my intention.",
      neutral: "I am sorry about the misunderstanding. I did not mean it that way.",
      friendly: "Sorry, that came out wrong. I did not mean it like that.",
      opener: "Hi, I wanted to check something about what happened.",
      followUp: "Thanks for saying that. What did you mean to say?",
      closing: "I understand. Thanks for clearing it up.",
      firstHintTr: "Özür dile ve niyetini sakin anlat.",
      secondAnswers: variants(
        "I meant to say that I respect your point.",
        "I should have explained it more clearly.",
        "I will be more careful with my wording next time.",
      ),
      secondHintTr: "Asıl niyetini veya düzeltmeni söyle.",
    };
  }

  if (/sikayet|şikayet|refund|iade|para iade|bozuk|yanlis|wrong|complaint/.test(text)) {
    const refund = /refund|iade|para iade/.test(text);
    return {
      intent: refund ? "refund" : "complaint",
      titleTr: refund ? "İade talebi" : "Şikayet konuşması",
      descriptionTr: description,
      npcRole: "Customer support agent",
      settingTr: channel === "Real life" ? "Customer support" : channel,
      formal: refund
        ? "I would like to request a refund because the issue has not been resolved."
        : "I would like to report an issue and ask for your help resolving it.",
      neutral: refund
        ? "I would like a refund, please. This did not work as expected."
        : "I have a problem with this and I need some help.",
      friendly: refund
        ? "Could you help me get a refund for this?"
        : "Could you help me sort this out?",
      opener: "Hi, how can I help you today?",
      followUp: refund
        ? "I understand. Can you tell me why you are requesting a refund?"
        : "I am sorry about that. What exactly happened?",
      closing: "Thanks for explaining. I will help you with the next step.",
      firstHintTr: refund
        ? "İade istediğini sebebiyle söyle."
        : "Sorunu sakin ve net anlat.",
      secondAnswers: defaultSecondAnswers(refund ? "refund" : "complaint"),
      secondHintTr: "Net bir çözüm veya sonraki adımı iste.",
    };
  }

  if (/otel|hotel|reservation|booking|check in|check-in/.test(text)) {
    return {
      intent: "hotel",
      titleTr: "Otel konuşması",
      descriptionTr: description,
      npcRole: "Hotel receptionist",
      settingTr: "Hotel",
      formal:
        "Hello, I have a reservation and I would like to check in, please.",
      neutral: "Hi, I have a booking under my name. Can I check in?",
      friendly: "Hi, I am here to check in.",
      opener: "Welcome. How can I help you?",
      followUp: "Sure. Could I have your name, please?",
      closing: "Great, I found your reservation.",
      firstHintTr: "Rezervasyonun olduğunu ve check-in istediğini söyle.",
      secondAnswers: variants(
        "The reservation should be under my name.",
        "Sure, my name is on the booking.",
        "I can show you my confirmation if needed.",
      ),
      secondHintTr: "İsmini veya rezervasyon bilgisini vereceğini söyle.",
    };
  }

  if (/taksi|taxi|uber|adres|address|driver/.test(text)) {
    return {
      intent: "taxi",
      titleTr: "Taksi konuşması",
      descriptionTr: description,
      npcRole: "Driver",
      settingTr: "Taxi",
      formal: "Could you take me to this address, please?",
      neutral: "Can you take me to this address?",
      friendly: "Hi, I need to go to this address.",
      opener: "Hi, where are you going?",
      followUp: "Sure. Do you have the address on your phone?",
      closing: "Okay, I can take you there.",
      firstHintTr: "Gitmek istediğin adresi söyle.",
      secondAnswers: variants(
        "Yes, I can show you the address on my phone.",
        "It is this address here.",
        "Please follow this location.",
      ),
      secondHintTr: "Adresi göstereceğini veya konumu takip etmesini söyle.",
    };
  }

  if (/restoran|restaurant|order|siparis|masa|menu|coffee|kahve/.test(text)) {
    return {
      intent: "restaurant",
      titleTr: "Sipariş konuşması",
      descriptionTr: description,
      npcRole: "Server",
      settingTr: "Restaurant",
      formal: "Could I order this, please?",
      neutral: "Can I have this, please?",
      friendly: "I will have this, please.",
      opener: "Hi, are you ready to order?",
      followUp: "Sure. Anything else?",
      closing: "Great, I will get that for you.",
      firstHintTr: "Ne istediğini kibarca söyle.",
      secondAnswers: variants(
        "That is all for now, thank you.",
        "Could I also have some water, please?",
        "No, that is everything, thanks.",
      ),
      secondHintTr: "Ek isteğini veya bu kadar olduğunu söyle.",
    };
  }

  if (/yardim|help|kaybold|lost|directions|where|nerede/.test(text)) {
    return {
      intent: "help",
      titleTr: "Yardım isteme",
      descriptionTr: description,
      npcRole: "Staff member",
      settingTr: channel,
      formal: "Excuse me, could you help me with this, please?",
      neutral: "Hi, I need some help with this.",
      friendly: "Hey, could you help me for a second?",
      opener: "Hi, do you need any help?",
      followUp: "Of course. What are you trying to do?",
      closing: "No problem, I can help with that.",
      firstHintTr: "Yardım istediğini kısa ve kibar söyle.",
      secondAnswers: variants(
        "I am trying to find the right place.",
        "I am not sure what to do next.",
        "Could you show me where to go?",
      ),
      secondHintTr: "Nerede takıldığını veya ne aradığını söyle.",
    };
  }

  return {
    intent: "generic",
    titleTr: channel === "WhatsApp" ? "Mesaj cevabı provası" : "Gerçek hayat provası",
    descriptionTr: description,
    npcRole: channel === "WhatsApp" ? "Message sender" : "Conversation partner",
    settingTr: channel,
    formal:
      "I wanted to explain the situation clearly. Please let me know if you need any more information.",
    neutral: "I wanted to give you a quick update about the situation.",
    friendly: "Just wanted to give you a quick heads-up.",
    opener:
      channel === "WhatsApp"
        ? "Hi, I saw your message. What would you like to say?"
        : "Hi, what did you want to talk about?",
    followUp: "Thanks for explaining. Is there anything else I should know?",
    closing: "All right, thanks for the update.",
    firstHintTr: "Durumu kısa ve net biçimde açıkla.",
    secondAnswers: defaultSecondAnswers("generic"),
    secondHintTr: "Gerekirse daha fazla bilgi verebileceğini söyle.",
  };
}

export function fallbackEmergencyAnswers(input: string): EmergencyAnswers {
  const plan = buildPlan(input);
  return {
    formal: plan.formal,
    neutral: plan.neutral,
    friendly: plan.friendly,
    source: "fallback",
  };
}

export async function generateEmergencyAnswers(
  input: string,
): Promise<EmergencyAnswers> {
  const clean = input.trim().slice(0, 500);
  const safety = checkUserInput(`English practice ${clean}`);
  if (!safety.ok) {
    throw new Error(
      safety.suggestedResponse_tr ?? "Bu istek güvenli İngilizce pratiğine uygun değil.",
    );
  }
  try {
    const result = await chatCompleteDetailed(
      [{ role: "user", content: `English practice request: ${clean}` }],
      {
        promptId: "tool.emergency",
        system: EMERGENCY_SYSTEM,
        maxTokens: 240,
        temperature: 0.25,
      },
    );
    const parsed = parseEmergencyAnswers(result.text);
    if (!parsed) throw new Error("invalid_response");
    const outputSafety = checkMayaOutput(
      `${parsed.formal} ${parsed.neutral} ${parsed.friendly}`,
    );
    if (!outputSafety.ok) throw new Error("unsafe_response");
    return parsed;
  } catch {
    return fallbackEmergencyAnswers(clean);
  }
}

function collectModelAnswers(item: Record<string, unknown>): string[] {
  const raw =
    item.modelAnswers ??
    item.model_answers ??
    item.modelAnswer ??
    item.model_answer;
  const candidates = Array.isArray(raw) ? raw : raw ? [raw] : [];
  return candidates
    .flatMap((answer) => {
      const clean = shortString(answer, 240);
      return clean ? [clean] : [];
    })
    .slice(0, 3);
}

export function parseCustomScenario(text: string): CustomScenario | null {
  const value = extractObject(text);
  if (!value || !Array.isArray(value.turns)) return null;
  const titleTr = shortString(value.titleTr, 80);
  const descriptionTr = shortString(value.descriptionTr, 220);
  const npcRole = shortString(value.npcRole, 80);
  const settingTr = shortString(value.settingTr, 80);
  if (!titleTr || !descriptionTr || !npcRole || !settingTr) return null;

  const expected = ["npc", "user", "npc", "user", "npc"] as const;
  if (value.turns.length !== expected.length) return null;
  const turns = value.turns.flatMap<CustomScenarioTurn>((raw, index) => {
    if (!raw || typeof raw !== "object") return [];
    const item = raw as Record<string, unknown>;
    if (item.speaker !== expected[index]) return [];
    if (item.speaker === "npc") {
      const message = shortString(item.message, 240);
      return message ? [{ speaker: "npc", message }] : [];
    }
    const models = collectModelAnswers(item);
    const hint = shortString(item.hintTr ?? item.hint_tr, 240);
    return models[0] && hint
      ? [
          {
            speaker: "user",
            model_answers: models,
            acceptable_patterns: [],
            hint_tr: hint,
          },
        ]
      : [];
  });
  if (turns.length !== 5) return null;
  const last = turns[4];
  if (last?.speaker !== "npc" || /[?？]\s*$/.test(last.message ?? "")) {
    return null;
  }
  return {
    titleTr,
    descriptionTr,
    npcRole,
    settingTr,
    turns,
    source: "ai",
  };
}

export function fallbackCustomScenario(input: string): CustomScenario {
  const plan = buildPlan(input);
  return {
    titleTr: plan.titleTr,
    descriptionTr: plan.descriptionTr,
    npcRole: plan.npcRole,
    settingTr: plan.settingTr,
    turns: [
      { speaker: "npc", message: plan.opener },
      {
        speaker: "user",
        model_answers: variants(plan.neutral, plan.formal, plan.friendly),
        acceptable_patterns: [],
        hint_tr: plan.firstHintTr,
      },
      {
        speaker: "npc",
        message: plan.followUp,
      },
      {
        speaker: "user",
        model_answers: plan.secondAnswers,
        acceptable_patterns: [],
        hint_tr: plan.secondHintTr,
      },
      { speaker: "npc", message: plan.closing },
    ],
    source: "fallback",
  };
}

export async function generateCustomScenario(
  input: string,
): Promise<CustomScenario> {
  const clean = input.trim().slice(0, 500);
  const safety = checkUserInput(`roleplay practice ${clean}`);
  if (!safety.ok) {
    throw new Error(
      safety.suggestedResponse_tr ?? "Bu istek güvenli İngilizce pratiğine uygun değil.",
    );
  }
  try {
    const result = await chatCompleteDetailed(
      [{ role: "user", content: `roleplay practice: ${clean}` }],
      {
        promptId: "tool.custom-scenario",
        system: CUSTOM_SYSTEM,
        maxTokens: 520,
        temperature: 0.45,
      },
    );
    const parsed = parseCustomScenario(result.text);
    if (!parsed) throw new Error("invalid_response");
    const outputSafety = checkMayaOutput(
      `roleplay practice ${parsed.turns.map((turn) => turn.message ?? turn.model_answers?.[0] ?? "").join(" ")}`,
    );
    if (!outputSafety.ok) throw new Error("unsafe_response");
    return parsed;
  } catch {
    return fallbackCustomScenario(clean);
  }
}
