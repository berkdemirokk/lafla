// Lafla — CEFR scene tag audit script.
//
// Çalıştırma:
//   cd apps/mobile && npx tsx scripts/audit-cefr-tags.ts
//
// Audit'in #3 fix'i: data/scenes.ts'teki Scene.cefrLevel tag'leri 100%
// author guess. Daha önceki audit "personal-b1-lesson.ts:64-74" gibi
// dosyalarda B1 tag'ı altında B2 register ("Real talk:", "Honest
// answer — how do you feel about...") tespit etmişti.
//
// Bu script:
//   1. Tüm BundledLesson'ları yükler (data/lessons.ts → allLessons)
//   2. Her lesson'un roleplay_chat exercise'ini bulur
//   3. NPC turn message'larında CEFR marker'larını sayar
//   4. data/scenes.ts'teki matching Scene'in cefrLevel'i ile karşılaştırır
//   5. Mismatch (A1/A2 tag + C1 marker, B1 tag + C1 marker, etc) flag eder
//   6. docs/CEFR_TAG_AUDIT_REPORT.md yazar
//
// Notes:
//   • Heuristic sade — false positive'leri azaltmak için sadece YÜKSEK
//     güvenli marker'lar (kesinlikle B2+ veya kesinlikle C1+ olan ifadeler)
//   • Script bir kerelik audit, runtime'da kullanılmaz
//   • Mismatch'leri ELLE düzeltmek gerek — script auto-fix yapmaz

import * as fs from "node:fs";
import * as path from "node:path";

// Allow run from project root or mobile dir.
const MOBILE_DIR = path.basename(process.cwd()) === "mobile"
  ? process.cwd()
  : path.join(process.cwd(), "apps", "mobile");

// ─── CEFR marker dictionaries ────────────────────────────────────────
//
// Markers grouped by minimum CEFR level. A scene tagged BELOW this level
// containing one of these markers is a mismatch candidate.
//
// Listeler "high confidence" — common B2 phrases like "I've been" eklemedim
// çünkü B1 sahnelerde de yaygın. Sadece B1+ register'da olabilecek
// idiomatic/formal/hedging ifadeler.

const B2_PLUS_MARKERS = [
  // Conditional perfect (had + p.p.)
  /\b(if i had known|had i known|if you had told|had we realized)\b/i,
  // Modal perfects
  /\b(would have|could have|should have|might have|may have|must have) (been|done|said|known|told)/i,
  // Hedging
  /\b(I'?d say that|to be fair|that said|the thing is)\b/i,
  // Formal collocations
  /\b(in my view|from my perspective|in my experience)\b/i,
  // Phrasal verb register
  /\b(brush it off|come to terms with|get to grips with|put up with)\b/i,
];

const C1_PLUS_MARKERS = [
  // Hedge stance markers
  /\b(on balance|albeit|in hindsight|for what it'?s worth)\b/i,
  /\b(with respect,? I('?d| would))\b/i,
  /\b(to my mind|I'?d argue|I'?d push back)\b/i,
  // Formal collocations
  /\b(warrants? further (consideration|examination|review))\b/i,
  /\b(leading indicator|downstream effect|incidentally)\b/i,
  /\b(real talk:?|honest answer)\b/i,
  // Subjunctive / inversion
  /\b(were i to|were it not for|had it not been for)\b/i,
  // Sophisticated discourse
  /\b(by and large|in retrospect|all things considered)\b/i,
];

const C2_PLUS_MARKERS = [
  /\b(should i have known|had it not been|were one to)\b/i,
  /\b(would have wrapped up|would have been remiss)\b/i,
  /\b(that being the case)\b/i,
];

type Level = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

const LEVEL_RANK: Record<Level, number> = {
  A1: 1,
  A2: 2,
  B1: 3,
  B2: 4,
  C1: 5,
  C2: 6,
};

// ─── Lesson + scene parsing ──────────────────────────────────────────
//
// We parse the source files directly with regex rather than `require()`-
// loading them — this avoids needing to transpile the entire TS bundle
// or polyfill React Native. Lesson schemas are predictable enough that
// regex is sufficient for an audit tool.

interface ParsedLesson {
  filePath: string;
  lessonId: string;
  npcMessages: string[];
}

function parseLessonsFromFile(filePath: string): ParsedLesson[] {
  const src = fs.readFileSync(filePath, "utf-8");
  const lessons: ParsedLesson[] = [];
  // Find LESSON-LEVEL ids only — root BundledLesson definitions.
  // Heuristic: look for `id: "..."` lines preceded within ~80 chars by
  // `BundledLesson` (the type annotation). Sub-exercise ids have `type: "..."`
  // or other patterns nearby instead.
  //
  // Even simpler: match `export const <var>: BundledLesson = {` then capture
  // the next `id: "..."` inside that block.
  const bundleRegex =
    /export\s+const\s+\w+\s*:\s*BundledLesson\s*=\s*\{\s*\n?\s*id:\s*"([^"]+)"/g;

  const lessonStarts: { id: string; offset: number }[] = [];
  let match;
  while ((match = bundleRegex.exec(src)) !== null) {
    lessonStarts.push({ id: match[1]!, offset: match.index });
  }

  // For each lesson, slice ends at the NEXT lesson's start (or EOF).
  // This slice contains the entire lesson incl. its exercises + turns.
  for (let i = 0; i < lessonStarts.length; i++) {
    const start = lessonStarts[i]!.offset;
    const end =
      i + 1 < lessonStarts.length ? lessonStarts[i + 1]!.offset : src.length;
    const slice = src.slice(start, end);

    // Extract NPC turns. Pattern: `speaker: "npc"` followed by `message: "..."`.
    // Multi-line OK; [^}] allows newlines because the s flag is set.
    const turnRegex =
      /speaker\s*:\s*"npc"[^}]*?message\s*:\s*"((?:[^"\\]|\\.)*?)"/gs;
    const messages: string[] = [];
    let turnMatch;
    while ((turnMatch = turnRegex.exec(slice)) !== null) {
      const text = turnMatch[1]!
        .replace(/\\"/g, '"')
        .replace(/\\n/g, "\n")
        .replace(/\\\\/g, "\\");
      messages.push(text);
    }
    if (messages.length > 0) {
      lessons.push({
        filePath,
        lessonId: lessonStarts[i]!.id,
        npcMessages: messages,
      });
    }
  }
  return lessons;
}

function parseSceneLevels(scenesFile: string): Map<string, Level> {
  const src = fs.readFileSync(scenesFile, "utf-8");
  const map = new Map<string, Level>();
  // scenes.ts tek satırlık sahne formatı:
  //   { id: ..., cefrLevel: "X", lessonId: "Y", ... },
  // cefrLevel HER ZAMAN lessonId'den ÖNCE. Çoklu sahne tek dosyada peş
  // peşe → window arama önceki sahnenin cefrLevel'ını yakalama riski.
  //
  // Fix: lessonId pozisyonundan SADECE GERİYE ara ve EN YAKIN cefrLevel'ı
  // al (önceki sahnenin değil, aynı satırdaki bu sahnenin).
  const lessonIdRegex = /lessonId:\s*"([^"]+)"/g;
  let m;
  while ((m = lessonIdRegex.exec(src)) !== null) {
    const lessonId = m[1]!;
    // 200 char yeterli — tek satırlık sahne için bol.
    const windowStart = Math.max(0, m.index - 200);
    const beforeWindow = src.slice(windowStart, m.index);
    // EN SON match'i bul (lessonId'e en yakın olan).
    const allMatches = [
      ...beforeWindow.matchAll(/cefrLevel:\s*"(A1|A2|B1|B2|C1|C2)"/g),
    ];
    if (allMatches.length > 0) {
      const last = allMatches[allMatches.length - 1]!;
      map.set(lessonId, last[1] as Level);
    }
  }
  return map;
}

// ─── Marker scoring ──────────────────────────────────────────────────

function countMarkers(
  text: string,
  patterns: RegExp[],
): { count: number; samples: string[] } {
  const samples: string[] = [];
  let count = 0;
  for (const re of patterns) {
    const m = text.match(re);
    if (m) {
      count++;
      samples.push(m[0]);
    }
  }
  return { count, samples };
}

interface Mismatch {
  lessonId: string;
  taggedLevel: Level;
  detectedMinLevel: Level;
  evidenceB2: string[];
  evidenceC1: string[];
  evidenceC2: string[];
  filePath: string;
}

function analyzeLesson(
  lesson: ParsedLesson,
  taggedLevel: Level,
): Mismatch | null {
  const joined = lesson.npcMessages.join(" ");
  const b2 = countMarkers(joined, B2_PLUS_MARKERS);
  const c1 = countMarkers(joined, C1_PLUS_MARKERS);
  const c2 = countMarkers(joined, C2_PLUS_MARKERS);

  // Detect highest CEFR level evidenced.
  let detected: Level = taggedLevel;
  if (c2.count > 0) detected = "C2";
  else if (c1.count > 0) detected = "C1";
  else if (b2.count > 0) detected = "B2";

  if (LEVEL_RANK[detected] > LEVEL_RANK[taggedLevel]) {
    return {
      lessonId: lesson.lessonId,
      taggedLevel,
      detectedMinLevel: detected,
      evidenceB2: b2.samples,
      evidenceC1: c1.samples,
      evidenceC2: c2.samples,
      filePath: lesson.filePath,
    };
  }
  return null;
}

// ─── Main ────────────────────────────────────────────────────────────

function findLessonFiles(dataDir: string): string[] {
  const all = fs.readdirSync(dataDir);
  return all
    .filter((f) => f.endsWith("-lesson.ts") || f.endsWith("-lessons.ts"))
    .map((f) => path.join(dataDir, f));
}

function main(): void {
  const dataDir = path.join(MOBILE_DIR, "data");
  const scenesFile = path.join(dataDir, "scenes.ts");

  console.log("CEFR Tag Audit — scanning...");
  const lessonFiles = findLessonFiles(dataDir);
  console.log(`  ${lessonFiles.length} lesson files`);

  // Walk all lesson files, collect lessons.
  const allLessons: ParsedLesson[] = [];
  for (const file of lessonFiles) {
    try {
      allLessons.push(...parseLessonsFromFile(file));
    } catch (err) {
      console.warn(`  skip ${path.basename(file)} (${(err as Error).message})`);
    }
  }
  console.log(`  ${allLessons.length} lessons with NPC turns extracted`);

  // Read scene levels from scenes.ts root file.
  const sceneLevels = parseSceneLevels(scenesFile);

  // Also look inside scene fragment files (cefr-*-scenes.ts).
  const sceneFragmentFiles = fs
    .readdirSync(dataDir)
    .filter((f) => f.endsWith("-scenes.ts"))
    .map((f) => path.join(dataDir, f));
  for (const f of sceneFragmentFiles) {
    const fragMap = parseSceneLevels(f);
    for (const [k, v] of fragMap) {
      if (!sceneLevels.has(k)) sceneLevels.set(k, v);
    }
  }
  console.log(`  ${sceneLevels.size} scene→level mappings`);

  // Analyze each lesson; skip those without a scene mapping.
  const mismatches: Mismatch[] = [];
  let analyzed = 0;
  for (const lesson of allLessons) {
    const taggedLevel = sceneLevels.get(lesson.lessonId);
    if (!taggedLevel) continue;
    analyzed++;
    const result = analyzeLesson(lesson, taggedLevel);
    if (result) mismatches.push(result);
  }
  console.log(`  ${analyzed} lessons analyzed`);
  console.log(`  ${mismatches.length} POTENTIAL MISMATCHES detected\n`);

  // Sort mismatches by severity (biggest jump first).
  mismatches.sort(
    (a, b) =>
      LEVEL_RANK[b.detectedMinLevel] -
      LEVEL_RANK[b.taggedLevel] -
      (LEVEL_RANK[a.detectedMinLevel] - LEVEL_RANK[a.taggedLevel]),
  );

  // Write markdown report.
  const reportPath = path.join(
    MOBILE_DIR,
    "..",
    "..",
    "docs",
    "CEFR_TAG_AUDIT_REPORT.md",
  );
  const lines: string[] = [];
  lines.push("# CEFR Scene Tag Audit — Auto-Generated");
  lines.push("");
  lines.push(`**Generated:** ${new Date().toISOString()}`);
  lines.push(
    `**Source:** \`apps/mobile/scripts/audit-cefr-tags.ts\` — re-run with \`npx tsx scripts/audit-cefr-tags.ts\``,
  );
  lines.push("");
  lines.push("## Summary");
  lines.push("");
  lines.push(`- **${allLessons.length}** lessons with NPC turns scanned`);
  lines.push(`- **${sceneLevels.size}** scene→level mappings found`);
  lines.push(`- **${analyzed}** lessons mapped to a Scene level`);
  lines.push(
    `- **${mismatches.length}** POTENTIAL MISMATCHES (tagged level lower than detected markers)`,
  );
  lines.push("");
  lines.push("Heuristic: a scene tagged below a marker's minimum level is");
  lines.push(
    "flagged. Marker dictionaries are HIGH-CONFIDENCE only (no common",
  );
  lines.push("B1 phrases) — false positives should be rare but possible.");
  lines.push("");
  lines.push("Manual review is required for each mismatch. The script does");
  lines.push("NOT auto-fix.");
  lines.push("");
  lines.push("## Mismatches (sorted by severity)");
  lines.push("");

  if (mismatches.length === 0) {
    lines.push("> No high-confidence mismatches detected. All scenes appear");
    lines.push("> correctly tagged relative to their NPC turn content.");
  } else {
    for (const m of mismatches) {
      lines.push(
        `### \`${m.lessonId}\` — tagged **${m.taggedLevel}**, detected **${m.detectedMinLevel}+**`,
      );
      lines.push("");
      lines.push(`- File: \`${path.relative(MOBILE_DIR, m.filePath)}\``);
      if (m.evidenceC2.length > 0) {
        lines.push(
          `- C2 markers: ${m.evidenceC2.map((s) => `\`${s}\``).join(", ")}`,
        );
      }
      if (m.evidenceC1.length > 0) {
        lines.push(
          `- C1 markers: ${m.evidenceC1.map((s) => `\`${s}\``).join(", ")}`,
        );
      }
      if (m.evidenceB2.length > 0) {
        lines.push(
          `- B2 markers: ${m.evidenceB2.map((s) => `\`${s}\``).join(", ")}`,
        );
      }
      lines.push("");
      lines.push(
        `**Suggested action:** re-tag to **${m.detectedMinLevel}** OR rewrite NPC turns to match ${m.taggedLevel} register.`,
      );
      lines.push("");
    }
  }

  lines.push("---");
  lines.push("");
  lines.push("## Notes for manual review");
  lines.push("");
  lines.push("1. **False positives are possible.** A B1 scene that quotes a");
  lines.push("   character using C1 sarcasm (\"with respect, I'd push back\")");
  lines.push("   may be pedagogically intentional — the user learns to");
  lines.push("   RECOGNIZE the register, not produce it.");
  lines.push("");
  lines.push("2. **Re-tagging up is conservative.** When in doubt, raise the");
  lines.push("   level rather than lower the content. CEFR engine treats");
  lines.push("   higher-tagged scenes as stretch material.");
  lines.push("");
  lines.push("3. **Rewriting NPC turns** is the alternative — soften the");
  lines.push("   marker phrase to a level-appropriate equivalent.");

  fs.writeFileSync(reportPath, lines.join("\n"));
  console.log(`Report written to: ${reportPath}`);
}

main();
