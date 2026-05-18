// Lafla — deterministic NPC first-name selection.
//
// PURPOSE
// ───────
// Real-device feedback flagged the roleplay header as feeling generic — every
// scene addressed the user with the bare role label ("Match", "Barista"). A
// scenario should feel like talking to a specific person, not a function-of-X.
// By pinning a first name to each scenario id we get the conversational
// foothold of "Mia just texted you" instead of "Barista just texted you" —
// the same NPC across retries, deterministic across devices, zero runtime
// cost.
//
// HOW IT WORKS
// ────────────
// 1. Classify the (role, setting) tuple into a context bucket (romantic,
//    barista, doctor, …). Buckets are matched by regex over the lowercased
//    role+setting string, mirroring the avatarEmojiFor heuristic in
//    RoleplayChat.tsx so the emoji and name stay coherent.
// 2. Hash the seed (typically a scenario id) with djb2 — same hash scheme as
//    lib/tts-cache.ts. djb2 is dependency-free, stable across launches and
//    devices, and uniform enough that small pools index evenly.
// 3. Index into the bucket's pool with `hash % pool.length`.
//
// Same scenario id ⇒ same bucket ⇒ same name, every render, every device.
// Pools are short and curated; names are intentionally short and easy for a
// Turkish-first learner to recognise on screen.

// ─── pools ────────────────────────────────────────────────────────────────

/**
 * Name pool per NPC context bucket. Order is meaningful: changing it would
 * remap every existing scenario to a different name. Add new names at the
 * END of a pool to preserve historical assignments.
 */
const NAME_POOLS = {
  romantic: ["Sam", "Alex", "Jordan", "Casey", "Riley", "Avery", "Morgan", "Drew"],
  barista: ["Mia", "Liam", "Noah", "Emma", "Olivia", "Theo"],
  doctor: ["Dr. Chen", "Dr. Patel", "Dr. Hartman", "Dr. Adeyemi", "Dr. Singh"],
  trainer: ["Coach Aaron", "Coach Lisa", "Coach Devon"],
  teacher: ["Ms. Bennett", "Mr. Walsh", "Dr. Reilly"],
  workplace: ["Erin", "Marcus", "Priya", "Theo", "Naomi"],
  family: ["Sam", "Chris", "Jamie"],
  generic: ["Alex"],
} as const;

type NpcBucket = keyof typeof NAME_POOLS;

// ─── classification ───────────────────────────────────────────────────────

/**
 * Map a (role, setting) pair to a context bucket. The order of checks
 * matters — earlier matches win. Kept aligned with avatarEmojiFor() in
 * RoleplayChat.tsx so a barista emoji never sits above a doctor's name.
 */
function bucketFor(role: string, setting: string): NpcBucket {
  const ctx = `${role} ${setting}`.toLowerCase();
  if (/tinder|date|match|crush|flirt|romance|partner|girlfriend|boyfriend/.test(ctx)) {
    return "romantic";
  }
  if (/coffee|cafe|barista|espresso|latte|waiter|server|restaurant|chef|kitchen|host/.test(ctx)) {
    return "barista";
  }
  // Note: `\ber\b` (with leading word boundary) — bare `er\b` would match the
  // trailing "er" in "manager"/"server"/"teacher" and steer those to doctors.
  if (/doctor|\bdr\.|hospital|clinic|\bgp\b|nurse|\ber\b|a&e|pharmacist|pharmacy|dentist|dental/.test(ctx)) {
    return "doctor";
  }
  if (/trainer|coach|gym|workout|fitness/.test(ctx)) {
    return "trainer";
  }
  if (/teacher|professor|advisor|tutor|examiner/.test(ctx)) {
    return "teacher";
  }
  if (/boss|manager|interview|recruit|hiring|director|coworker|colleague|team|standup|meeting|slack/.test(ctx)) {
    return "workplace";
  }
  if (/friend|buddy|roommate|pal|family|mom|dad|parent|sister|brother|cousin/.test(ctx)) {
    return "family";
  }
  return "generic";
}

// ─── hash ─────────────────────────────────────────────────────────────────

/**
 * djb2 string hash — same algorithm used by lib/tts-cache.ts. Dependency-free,
 * stable across React Native launches and devices, ~uniformly distributed
 * over the tiny pools we index into. Not cryptographic — just deterministic.
 */
function djb2(input: string): number {
  let h = 5381;
  for (let i = 0; i < input.length; i++) {
    h = (((h << 5) + h) ^ input.charCodeAt(i)) >>> 0;
  }
  return h;
}

// ─── public API ───────────────────────────────────────────────────────────

/**
 * Return a stable first name for an NPC, derived deterministically from the
 * provided seed (typically the scenario id). The same seed always returns
 * the same name within the same context bucket — across renders, sessions,
 * and devices.
 *
 * @param npcRole    The NPC's role (e.g. "Match", "Barista", "Doctor").
 * @param setting    The scene setting (e.g. "coffee shop", "first date").
 * @param seed       Stable identifier — scenario id is ideal. Falsy seeds
 *                   degrade gracefully to a deterministic fallback derived
 *                   from (role + setting), so a missing seed never crashes.
 * @returns          A first name (or honoured title) from the matching pool.
 */
export function nameForNpc(
  npcRole: string,
  setting: string,
  seed: string,
): string {
  const bucket = bucketFor(npcRole, setting);
  const pool = NAME_POOLS[bucket];
  // Empty seed → fall back to the (role+setting) tuple so we still produce
  // a deterministic name rather than always returning pool[0].
  const effectiveSeed = seed && seed.length > 0 ? seed : `${npcRole}|${setting}`;
  const idx = djb2(effectiveSeed) % pool.length;
  // Pools are non-empty by construction; the non-null assertion is safe.
  return pool[idx]!;
}
