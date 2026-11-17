import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();

const scannedRoots = [
  "data",
  "lib/mistake-patterns.ts",
  "lib/scenario.ts",
  "lib/cefr-calibrator.ts",
].map((entry) => join(root, entry));

const forbidden = [
  {
    label: "native review blocker",
    pattern:
      /\bnative[-_]review\b|\bnative review\s+(pending|blocked|required|todo)\b|\btodo\s+native\b/i,
  },
  {
    label: "pending review status",
    pattern:
      /\breview_?status\s*[:=]\s*["']pending["']|\breviewStatus\s*[:=]\s*["']pending["']/i,
  },
  {
    label: "failed cultural fit flag",
    pattern:
      /\bcultural_?fit_?ok\s*[:=]\s*false\b|\bculturalFitOk\s*[:=]\s*false\b/i,
  },
];

function collectFiles(path: string): string[] {
  const stat = statSync(path);
  if (stat.isFile()) return [path];

  return readdirSync(path).flatMap((name) => {
    const child = join(path, name);
    const childStat = statSync(child);
    if (childStat.isDirectory()) return collectFiles(child);
    if (/\.(ts|tsx|json)$/i.test(name)) return [child];
    return [];
  });
}

const files = scannedRoots.flatMap(collectFiles);
const violations: Array<{
  file: string;
  line: number;
  gate: string;
  text: string;
}> = [];

for (const file of files) {
  const content = readFileSync(file, "utf8");
  const lines = content.split(/\r?\n/);
  lines.forEach((line, index) => {
    for (const rule of forbidden) {
      if (rule.pattern.test(line)) {
        violations.push({
          file: relative(root, file),
          line: index + 1,
          gate: rule.label,
          text: line.trim(),
        });
      }
    }
  });
}

console.log(
  JSON.stringify(
    {
      scannedFiles: files.length,
      violations,
    },
    null,
    2,
  ),
);

if (violations.length > 0) {
  process.exitCode = 1;
}
