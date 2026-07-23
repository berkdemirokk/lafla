import { existsSync, readFileSync } from "node:fs";
import { basename, join, resolve } from "node:path";

const mobileDir =
  basename(process.cwd()) === "mobile"
    ? process.cwd()
    : join(process.cwd(), "apps", "mobile");
const repoRoot = resolve(mobileDir, "..", "..");

const errors: string[] = [];

function readRequired(path: string): string {
  if (!existsSync(path)) {
    errors.push(`Missing file: ${path}`);
    return "";
  }
  return readFileSync(path, "utf8");
}

const checklistPath = join(mobileDir, "docs", "testflight-smoke-checklist.md");
const checklist = readRequired(checklistPath);
const maestroFlow = readRequired(join(mobileDir, ".maestro", "smoke.yaml"));
for (const marker of ["auth-skip", "onboarding-screen"]) {
  if (!maestroFlow.includes(marker)) errors.push(`Maestro smoke missing ${marker}`);
}
const requiredChecks = Array.from({ length: 14 }, (_, index) =>
  `SMOKE-${String(index + 1).padStart(2, "0")}`,
);
for (const id of requiredChecks) {
  if (!checklist.includes(id)) errors.push(`Checklist missing ${id}`);
}

const packageJsonPath = join(mobileDir, "package.json");
const packageJsonRaw = readRequired(packageJsonPath);
const scripts = packageJsonRaw
  ? (JSON.parse(packageJsonRaw) as { scripts?: Record<string, string> }).scripts ?? {}
  : {};
const requiredScripts = [
  "typecheck",
  "test",
  "qa:content",
  "qa:linguist:check",
  "qa:visual",
  "qa:perf",
  "qa:smoke",
  "expo:check",
];
for (const script of requiredScripts) {
  if (!scripts[script]) errors.push(`package.json missing script ${script}`);
}

const layout = readRequired(join(mobileDir, "app", "_layout.tsx"));
const requiredRoutes = [
  "home",
  "placement",
  "scenario/[id]",
  "today",
  "paywall",
  "settings",
  "voice-diagnostics",
];
for (const route of requiredRoutes) {
  if (!layout.includes(`name="${route}"`)) {
    errors.push(`Root navigator missing route ${route}`);
  }
}

const settings = readRequired(join(mobileDir, "app", "settings.tsx"));
if (!settings.includes("/voice-diagnostics")) {
  errors.push("Settings screen does not link to voice diagnostics");
}

const workflow = readRequired(join(repoRoot, ".github", "workflows", "expo-testflight.yml"));
const requiredWorkflowMarkers = [
  "Run mobile tests",
  "Audit roleplay content",
  "Verify linguist review sample",
  "Audit scene visuals",
  "Run mobile performance budget",
  "Verify TestFlight smoke checklist",
  "Run Maestro iOS smoke",
  "Verify Expo dependencies",
  "Upload to TestFlight",
];
for (const marker of requiredWorkflowMarkers) {
  if (!workflow.includes(marker)) {
    errors.push(`TestFlight workflow missing step marker: ${marker}`);
  }
}

console.log(
  JSON.stringify(
    {
      checklist: "docs/testflight-smoke-checklist.md",
      requiredChecks: requiredChecks.length,
      requiredRoutes,
      requiredScripts,
      errors,
    },
    null,
    2,
  ),
);

if (errors.length > 0) {
  process.exitCode = 1;
}
