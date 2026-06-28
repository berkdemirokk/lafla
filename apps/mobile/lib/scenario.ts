// Lafla — Scenario engine. The pivot from "Duolingo lesson" to "real conversation."
//
// Her senaryo kısa bir öğrenme döngüsü olarak hazırlanır:
//
//   1. SETUP: En fazla 3 hedef kelime/kalıp
//   2. DRILL: En fazla 2 kontrollü alıştırma
//   3. SCENE: Destekli roleplay
//   4. VERDICT: Sonuç + sonraki tekrar

import { allLessons, type BundledLesson } from "../data/lessons";
import { SAMPLE_SCENES, type CefrLevel } from "../data/scenes";
import { normalizeRoleplayPatterns } from "./roleplay-pattern";
import {
  calibrateScenarioLevel,
  calibrateSessionMinutes,
} from "./cefr-calibrator";

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
  model_answers?: string[];
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

export const MAX_SETUP_ITEMS = 2;
export const MAX_CONTROLLED_PRACTICE_ITEMS = 1;
export const MAX_ROLEPLAY_USER_TURNS = 2;

export function limitRoleplayTurns<T extends SceneTurn>(
  turns: readonly T[],
  maxUserTurns = MAX_ROLEPLAY_USER_TURNS,
): T[] {
  const limited: T[] = [];
  let userTurns = 0;

  for (let index = 0; index < turns.length; index += 1) {
    const turn = turns[index]!;
    if (turn.speaker === "user") {
      if (userTurns >= maxUserTurns) {
        // Preserve the first authored closing acknowledgement after the
        // omitted turn. This keeps a short scene from ending abruptly on the
        // learner's message or on an unanswered NPC question.
        const closingNpc = turns
          .slice(index + 1)
          .find(
            (candidate) =>
              candidate.speaker === "npc" &&
              !/[?？]\s*$/.test(candidate.message ?? ""),
          );
        if (closingNpc) limited.push(closingNpc);
        break;
      }
      userTurns += 1;
    }
    limited.push(turn);
  }

  // A final NPC question without a following user turn makes the scene feel
  // broken, whether it came from truncation or malformed authored content.
  const last = limited[limited.length - 1];
  if (
    last?.speaker === "npc" &&
    /[?？]\s*$/.test(last.message ?? "")
  ) {
    limited.pop();
  }

  return limited;
}

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
  const roleplay = exercises.find((e) => e.type === "roleplay_chat");

  // A scenario MUST have a roleplay. Skip lessons without one.
  if (!roleplay) return null;
  const limitedRoleplayTurns = limitRoleplayTurns(roleplay.turns);

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

  // Tek oturumda çok sayıda farklı egzersiz tipi göstermek öğrenme hedefini
  // dağıtıyordu. Veri sırasını koruyarak yalnızca iki kontrollü pratik seç.
  // Recall ayrı bir tekrar oturumunun işi; aynı sahnenin sonuna eklenmez.
  const consumedTypes = new Set([
    "vocab_tile",
    "roleplay_chat",
    "recall_quiz",
    "recap_quiz",
  ]);
  const warmups = exercises
    .filter((e) => !consumedTypes.has(e.type))
    .slice(0, MAX_CONTROLLED_PRACTICE_ITEMS);

  return {
    id: lesson.id,
    skill_id: lesson.skill_id,
    mode: modeOf(lesson.skill_id),
    title: lesson.title,
    description: lesson.description ?? "",
    estimated_minutes: calibrateSessionMinutes(lesson.estimated_minutes ?? 3),
    cefrLevel: calibrateScenarioLevel(
      _lessonLevelMap.get(lesson.id),
      limitedRoleplayTurns,
    ),
    setup,
    setupExtra: [],
    preScene: [],
    recallQuiz: null,
    scene: {
      description: roleplay.scenario_description,
      npc_role: roleplay.npc_role,
      setting: roleplay.setting,
      turns: limitedRoleplayTurns.map((turn) =>
        turn.speaker === "user"
          ? {
              ...turn,
              acceptable_patterns: normalizeRoleplayPatterns(
                turn.acceptable_patterns ?? [],
              ),
            }
          : turn,
      ),
    },
    warmups,
  };
}

// Cached all scenarios — built once from the lesson registry.
let _scenariosCache: Scenario[] | null = null;
let _scenarioByIdCache: Map<string, Scenario> | null = null;

export function allScenarios(): Scenario[] {
  if (_scenariosCache) return _scenariosCache;
  _scenariosCache = allLessons
    .map(lessonToScenario)
    .filter((s): s is Scenario => s !== null);
  _scenarioByIdCache = new Map(
    _scenariosCache.map((scenario) => [scenario.id, scenario]),
  );
  return _scenariosCache;
}

export function getScenario(id: string): Scenario | null {
  if (!_scenarioByIdCache) allScenarios();
  return _scenarioByIdCache?.get(id) ?? null;
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
