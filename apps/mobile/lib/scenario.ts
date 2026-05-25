// Lafla — Scenario engine. The pivot from "Duolingo lesson" to "real conversation."
//
// 2026-05-24 — Content expansion (Phase 1, Agent B). Scenario yapısı genişledi:
// vocab-only "tanıt-geç" setup'tan, ~10 dakikalık kademeli pratiğe. Phases:
//
//   1. SETUP-1: Vocab teaching (up to 12 vocab_tile)
//   2. SETUP-2: Sentence Pattern + Dialogue Gap (setupExtra)
//   3. DRILL: translate / fill_blank / word_order / spot_mistake / thinking_trap
//   4. PRE-SCENE: Listen-Respond rehearsal (max 3 turn)
//   5. SCENE: Roleplay chat
//   6. RECALL: Verdict öncesi son recall_quiz (varsa 1 tane)
//   7. VERDICT: Fluency score + next-review schedule
//
// Eski lesson dosyaları yeni egzersiz tiplerini içermeyebilir — bu durumda
// setupExtra / preScene boş array, recallQuiz null olur ve UI bunları
// gracefully skip eder.

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
  /**
   * 2026-05-25 — Phase 5D adaptive setup. vocab_tile.cefr_band'tan map edilir.
   * Eski lesson dosyalarında (henüz retag edilmemiş) undefined kalır —
   * filterSetupByLevel untagged vocab'ları HER zaman dahil eder, bu sayede
   * tagged + untagged karışım gracefully çalışır.
   */
  cefr_band?: CefrLevel;
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
  /**
   * Setup'ta vocab'tan sonra gösterilen sentence_pattern + dialogue_gap
   * egzersizleri. Lesson author intent: kullanıcı vocab'ı tanıdıktan sonra
   * bunları cümle yapısında / mini diyalogda görüyor. Eski lesson'larda boş.
   */
  setupExtra: BundledLesson["exercises"];
  scene: {
    description: string;
    npc_role: string;
    setting: string;
    turns: SceneTurn[];
  };
  /**
   * Roleplay sahnesinden ÖNCE çalıştırılan listen_respond rehearsal'ları
   * (en fazla 3 tane). Kullanıcı NPC'yi dinler, 3 saniye düşünür, cevap verir.
   * Voice-first warm-up. Eski lesson'larda boş.
   */
  preScene: BundledLesson["exercises"];
  /**
   * Verdict ÖNCESİ gösterilen son recall_quiz (varsa ilk tanesi, yoksa null).
   * 5 hızlı flashcard ~1 dakika. Eski lesson'larda null.
   */
  recallQuiz: BundledLesson["exercises"][number] | null;
  // Optional warm-up drills extracted from non-roleplay exercises.
  // thinking_trap'i de içerir (drill phase'inde gösterilecek).
  warmups: BundledLesson["exercises"];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyExercise = any;

function modeOf(skillId: string): string {
  return skillId.split(".")[0] ?? "general";
}

/**
 * Extract a Scenario from a BundledLesson.
 *
 * Setup pipeline:
 * - setup = ilk 25 vocab_tile (tüm pool; UI tarafında user level'a göre
 *   filtrelenir, filterSetupByLevel cap 12 uygular)
 * - setupExtra = tüm sentence_pattern + dialogue_gap (order preserved)
 * - preScene = ilk 3 listen_respond
 * - recallQuiz = ilk recall_quiz (yoksa null)
 * - warmups = geri kalan her şey (translate, fill_blank, word_order,
 *   spot_mistake, thinking_trap, vb.)
 *
 * 2026-05-24 — Setup cap 6 → 12 (content expansion). Eski lesson'lar yeni
 * egzersiz tiplerini içermez; bu durumda setupExtra=[], preScene=[],
 * recallQuiz=null olur ve UI bu fazları skip eder.
 *
 * 2026-05-25 — Phase 5D: cap 12 → 25 (adaptive). lessons retag edildikçe
 * vocab_tile sayısı 25'e çıkıyor; SetupPhrase.cefr_band buradan map edilir.
 * Adaptive seçim filterSetupByLevel'da: comfort-zone +1 band'lar + untagged
 * her zaman dahil → cap 12. Retag edilmemiş eski lesson'larda setup ≤12
 * kalır, davranış değişmez.
 */
export function lessonToScenario(lesson: BundledLesson): Scenario | null {
  const exercises = lesson.exercises as AnyExercise[];

  const vocabTiles = exercises.filter((e) => e.type === "vocab_tile");
  const sentencePatterns = exercises.filter(
    (e) => e.type === "sentence_pattern",
  );
  const dialogueGaps = exercises.filter((e) => e.type === "dialogue_gap");
  const listenResponds = exercises.filter((e) => e.type === "listen_respond");
  const recallQuizzes = exercises.filter((e) => e.type === "recall_quiz");
  const roleplay = exercises.find((e) => e.type === "roleplay_chat");

  // A scenario MUST have a roleplay. Skip lessons without one.
  if (!roleplay) return null;

  // 2026-05-25 — Phase 5D: cap 12 → 25. Adaptive filtering UI tarafında
  // (filterSetupByLevel) yapılıyor — burada tüm pool'u Setup'a getiriyoruz ki
  // user level'a göre comfort-zone +1 band'lardan 12 vocab seçilebilsin.
  // cefr_band field'ı vocab_tile'dan SetupPhrase'e map edilir; eski lesson
  // dosyalarında undefined kalır (backward compat).
  const setup: SetupPhrase[] = vocabTiles.slice(0, 25).map((v) => ({
    en: v.word_or_phrase,
    tr: v.tr_translation,
    example: v.example,
    example_tr: v.example_tr,
    cefr_band: v.cefr_band as CefrLevel | undefined,
  }));

  // Setup-2: pattern + dialogue gap (order preserved from lesson file).
  const setupExtra = [...sentencePatterns, ...dialogueGaps];

  // Pre-scene rehearsal: en fazla 3 listen_respond.
  const preScene = listenResponds.slice(0, 3);

  // Verdict öncesi recall (varsa).
  const recallQuiz = recallQuizzes[0] ?? null;

  // Drill phase'te kullanılacak warmups. setup/setupExtra/preScene/recallQuiz/
  // roleplay'de tüketilen tipleri çıkar; thinking_trap dahil kalan her şey
  // drill'e düşer.
  const consumedTypes = new Set([
    "vocab_tile",
    "roleplay_chat",
    "sentence_pattern",
    "dialogue_gap",
    "listen_respond",
    "recall_quiz",
  ]);
  const warmups = exercises.filter((e) => !consumedTypes.has(e.type));

  return {
    id: lesson.id,
    skill_id: lesson.skill_id,
    mode: modeOf(lesson.skill_id),
    title: lesson.title,
    description: lesson.description ?? "",
    estimated_minutes: lesson.estimated_minutes ?? 3,
    cefrLevel: _lessonLevelMap.get(lesson.id),
    setup,
    setupExtra,
    preScene,
    recallQuiz,
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
