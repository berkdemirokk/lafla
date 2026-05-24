// Lafla — Scenario engine. The pivot from "Duolingo lesson" to "real conversation."
//
// Each "scenario" has 3 phases:
//   1. SETUP — show 2-3 key phrases the user needs (vocab teach + TTS)
//   2. SCENE — roleplay chat (actual production via typing + auto-spoken NPC)
//   3. VERDICT — fluency score for this scene + next-review schedule
//
// Optional 4th: WARM-UP — drill exercises (translate/fill_blank/etc) for users
// who want extra practice. Hidden behind a "Daha çok pratik" button.

import { allLessons, type BundledLesson } from "../data/lessons";
import { SAMPLE_SCENES, type CefrLevel } from "../data/scenes";

// 2026-05-21 — scenario-level CEFR adaptation. Each Scenario inherits the
// `cefrLevel` of its matching Scene (data/scenes.ts). RoleplayChat reads
// both this anchor level and the user's level to modulate hint visibility
// and difficulty cues — e.g. user.A1 in a B2 scene → always show TR hint,
// user.C1 in a B1 scene → hide hints by default (challenge mode).
//
// Building a Map once at module load avoids O(n) scans per scenario lookup.
const _lessonLevelMap = new Map<string, CefrLevel>();
for (const s of SAMPLE_SCENES) {
  if (s.cefrLevel) _lessonLevelMap.set(s.lessonId, s.cefrLevel);
}

export interface SetupPhrase {
  en: string;
  tr: string;
  example?: string;
  example_tr?: string;
}

export interface SceneTurn {
  speaker: "npc" | "user";
  message?: string;
  acceptable_patterns?: string[];
  hint_tr?: string;
}

export interface Scenario {
  id: string; // matches BundledLesson.id
  skill_id: string;
  mode: string;
  title: string;
  description: string;
  estimated_minutes: number;
  /**
   * Anchor CEFR level for this scenario — the level it was authored for.
   * Sourced from the matching Scene in data/scenes.ts. Optional because
   * a small handful of lessons may exist without a Scene mapping.
   *
   * RoleplayChat compares this to the user's level to adapt hint
   * visibility and pacing (loss-aversion / challenge cues).
   */
  cefrLevel?: CefrLevel;
  setup: SetupPhrase[];
  scene: {
    description: string;
    npc_role: string;
    setting: string;
    turns: SceneTurn[];
  };
  // Optional warm-up drills extracted from non-roleplay exercises
  warmups: BundledLesson["exercises"];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyExercise = any;

function modeOf(skillId: string): string {
  return skillId.split(".")[0] ?? "general";
}

/**
 * Extract a Scenario from a legacy BundledLesson.
 * - setup = first vocab_tile exercise(s) (up to 6)
 * - scene = the roleplay_chat exercise
 * - warmups = everything else (translate, fill_blank, word_order, spot_mistake, recap_quiz)
 *
 * 2026-05-24 — Setup cap 2 → 6. Lesson author'lar her sahneye ~12 vocab_tile
 * koyuyordu ama eski versiyon sadece ilk 2'sini setup'a alıyordu; kalan 10
 * vocab DrillRenderer'da default-skip'e düşüyordu (silent score 100, kullanıcı
 * görmüyordu). Kullanıcı şikayeti: "kelime öğretmeden roleplay'e giriyor".
 * Şimdi 6 vocab öğretildikten sonra drill + scene'e geçilir. ~3-4 dk setup'a
 * ekleme.
 */
export function lessonToScenario(lesson: BundledLesson): Scenario | null {
  const exercises = lesson.exercises as AnyExercise[];

  const vocabTiles = exercises.filter((e) => e.type === "vocab_tile");
  const roleplay = exercises.find((e) => e.type === "roleplay_chat");

  // A scenario MUST have a roleplay. Skip lessons without one.
  if (!roleplay) return null;

  const setup: SetupPhrase[] = vocabTiles.slice(0, 6).map((v) => ({
    en: v.word_or_phrase,
    tr: v.tr_translation,
    example: v.example,
    example_tr: v.example_tr,
  }));

  const warmups = exercises.filter(
    (e) => e.type !== "vocab_tile" && e.type !== "roleplay_chat",
  );

  return {
    id: lesson.id,
    skill_id: lesson.skill_id,
    mode: modeOf(lesson.skill_id),
    title: lesson.title,
    description: lesson.description ?? "",
    estimated_minutes: lesson.estimated_minutes ?? 3,
    cefrLevel: _lessonLevelMap.get(lesson.id),
    setup,
    scene: {
      description: roleplay.scenario_description,
      npc_role: roleplay.npc_role,
      setting: roleplay.setting,
      turns: roleplay.turns,
    },
    warmups,
  };
}

// Cached all scenarios — built once from the lesson registry.
let _scenariosCache: Scenario[] | null = null;

export function allScenarios(): Scenario[] {
  if (_scenariosCache) return _scenariosCache;
  _scenariosCache = allLessons
    .map(lessonToScenario)
    .filter((s): s is Scenario => s !== null);
  return _scenariosCache;
}

export function getScenario(id: string): Scenario | null {
  return allScenarios().find((s) => s.id === id) ?? null;
}

export function getScenariosByMode(mode: string): Scenario[] {
  return allScenarios().filter((s) => s.mode === mode);
}

export function getScenariosBySkill(skillId: string): Scenario[] {
  return allScenarios()
    .filter((s) => s.skill_id === skillId)
    .sort((a, b) => {
      // Preserve original lesson order by ID
      return a.id.localeCompare(b.id);
    });
}

// Compute fluency from scene completion — average score of user turns.
export function computeSceneFluency(
  turnScores: number[],
): { score: number; band: "low" | "mid" | "high" } {
  if (turnScores.length === 0) return { score: 0, band: "low" };
  const avg = turnScores.reduce((s, n) => s + n, 0) / turnScores.length;
  const score = Math.round(avg);
  const band = score >= 75 ? "high" : score >= 45 ? "mid" : "low";
  return { score, band };
}
