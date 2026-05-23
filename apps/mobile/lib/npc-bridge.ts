// Lafla — NPC bridge phrases (mini-Markov for conversation feel).
//
// 2026-05-23 — Faz 3 LLM-siz smart conversation. NPC turn'lerinin
// başına 30% deterministic random "bridge phrase" ekler — sahnenin
// scripted feel'i azalır, doğal konuşma akışı artar.
//
// Niye LLM kullanmıyoruz:
//   • AI gideri ZERO (kullanıcı net olarak istedi)
//   • 0ms latency (offline çalışır)
//   • Deterministic — aynı sahne her zaman aynı bridge'i alır (testable)
//
// Deterministic seed = hash(scenario.id + turnIdx) → tekrar girince aynı.

const BRIDGES = {
  // Score >= 75 (good response) — affirming bridges
  good: [
    "Right,",
    "Yeah,",
    "Got it,",
    "Sure,",
    "Okay,",
    "Mhm,",
    "Of course,",
    "Makes sense,",
    "Fair enough,",
    "True,",
  ],
  // Score 50-74 (partial) — neutral bridges
  partial: [
    "Hmm,",
    "Well,",
    "I see,",
    "So,",
    "Right,",
    "Okay so,",
    "Alright,",
    "Mm-hm,",
  ],
  // Score < 50 (low) — clarifying bridges
  low: [
    "Sorry, just to be clear,",
    "Let me check —",
    "Wait,",
    "Hmm, just so I understand,",
    "Right, so",
  ],
  // First turn / no previous score — opening bridges
  opening: [
    "Hey,",
    "Oh hey,",
    "Hi,",
    "Hello,",
    "Hi there,",
  ],
};

type BridgeBucket = keyof typeof BRIDGES;

// djb2 hash — same as npc-names.ts. Deterministic.
function djb2(input: string): number {
  let h = 5381;
  for (let i = 0; i < input.length; i++) {
    h = (((h << 5) + h) ^ input.charCodeAt(i)) >>> 0;
  }
  return h;
}

/**
 * Score'a göre bridge bucket seç.
 */
function bucketForScore(prevScore: number | null): BridgeBucket {
  if (prevScore === null) return "opening";
  if (prevScore >= 75) return "good";
  if (prevScore >= 50) return "partial";
  return "low";
}

/**
 * Bir NPC turn'üne deterministic random bridge ekler — VEYA orijinali
 * olduğu gibi döndürür (70% no-op).
 *
 * Bu sayede her sahnede ~30% turn'de subtle "doğal konuşma" hissi olur,
 * AMA scripted authoritative voice bozulmaz.
 */
export function maybePrependBridge(
  npcMessage: string,
  seed: string,
  turnIdx: number,
  prevScore: number | null,
): string {
  if (!npcMessage || !npcMessage.trim()) return npcMessage;
  const h = djb2(`${seed}|${turnIdx}|bridge`);
  // 30% probability of injection. h % 10 < 3 → ~30%.
  if (h % 10 >= 3) return npcMessage;

  const bucket = bucketForScore(prevScore);
  const candidates = BRIDGES[bucket];
  const pick = candidates[h % candidates.length]!;

  // Don't double-prepend if NPC line already starts with a known bridge.
  const lower = npcMessage.toLowerCase().trim();
  const allBridges = Object.values(BRIDGES).flat();
  for (const b of allBridges) {
    if (lower.startsWith(b.toLowerCase())) return npcMessage;
  }
  // Lowercase first letter of original line (since bridge ends with comma).
  // Heuristic: only lowercase if first char is upper AND second char is lower
  // (proper case word). Preserve proper nouns ("I", "I'd", names).
  const first = npcMessage[0]!;
  const second = npcMessage[1] ?? "";
  const shouldLowercase =
    first === first.toUpperCase() &&
    first !== first.toLowerCase() &&
    second === second.toLowerCase() &&
    second !== "" &&
    first !== "I"; // don't lowercase "I"
  const tail = shouldLowercase
    ? first.toLowerCase() + npcMessage.slice(1)
    : npcMessage;
  return `${pick} ${tail}`;
}
