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

const CUSTOM_SYSTEM = `Create a realistic adult two-turn English roleplay from the user's Turkish situation, pasted message, or meeting topic. Return JSON only with titleTr, descriptionTr, npcRole, settingTr and exactly five alternating turns starting with npc and ending with a non-question npc acknowledgement. User turns must contain one modelAnswers string and a Turkish hintTr.`;

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
  return value
    .replace(/İ/g, "i")
    .replace(/ı/g, "i")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export function fallbackEmergencyAnswers(input: string): EmergencyAnswers {
  const text = normalizeTr(input);
  if (/gecik|gec kal|yetisem/.test(text)) {
    return {
      formal:
        "I wanted to let you know that I'm running late. I apologize for the delay and will keep you updated.",
      neutral: "I'm running a little late. I'll keep you posted.",
      friendly: "I'm running late — sorry! I'll message you when I'm close.",
      source: "fallback",
    };
  }
  if (/ertele|tarihi degis|yeniden plan|baska gun/.test(text)) {
    return {
      formal:
        "Would it be possible to reschedule? Please let me know what time works best for you.",
      neutral: "Could we move this to another time? What works for you?",
      friendly: "Can we move this? Tell me what time suits you.",
      source: "fallback",
    };
  }
  if (/hasta|iyi hisset|rahatsiz/.test(text)) {
    return {
      formal:
        "I'm not feeling well today, so I may need to take some time to recover. Thank you for understanding.",
      neutral: "I'm not feeling well today. I need some time to rest.",
      friendly: "I'm feeling under the weather today, so I'm going to rest.",
      source: "fallback",
    };
  }
  if (/ozur|kusura bak|yanlis anla/.test(text)) {
    return {
      formal: "I apologize for the misunderstanding. That wasn't my intention.",
      neutral: "I'm sorry about the misunderstanding. I didn't mean it that way.",
      friendly: "Sorry — that came out wrong. I didn't mean it like that.",
      source: "fallback",
    };
  }
  return {
    formal:
      "I wanted to explain the situation clearly. Please let me know if you need any more information.",
    neutral: "I wanted to give you a quick update about the situation.",
    friendly: "Just wanted to give you a quick heads-up.",
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
    const models = Array.isArray(item.modelAnswers)
      ? item.modelAnswers.flatMap((answer) => {
          const clean = shortString(answer, 240);
          return clean ? [clean] : [];
        })
      : [];
    const hint = shortString(item.hintTr, 240);
    return models[0] && hint
      ? [
          {
            speaker: "user",
            model_answers: [models[0]],
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
  const answers = fallbackEmergencyAnswers(input);
  const text = normalizeTr(input);
  const isWork = /patron|mudur|is |toplanti|proje/.test(text);
  return {
    titleTr: isWork ? "İş konuşması provası" : "Gerçek hayat provası",
    descriptionTr: input.trim().slice(0, 180),
    npcRole: isWork ? "Manager" : "Conversation partner",
    settingTr: /whatsapp|mesaj/.test(text) ? "WhatsApp" : "Gerçek hayat",
    turns: [
      { speaker: "npc", message: "Hi — what did you want to talk about?" },
      {
        speaker: "user",
        model_answers: [answers.neutral],
        acceptable_patterns: [],
        hint_tr: "Durumu kısa ve net biçimde açıkla.",
      },
      {
        speaker: "npc",
        message: "Thanks for letting me know. Is there anything else I should know?",
      },
      {
        speaker: "user",
        model_answers: ["I'll keep you updated if anything changes."],
        acceptable_patterns: [],
        hint_tr: "Değişiklik olursa haber vereceğini söyle.",
      },
      { speaker: "npc", message: "All right, thanks for the update." },
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
