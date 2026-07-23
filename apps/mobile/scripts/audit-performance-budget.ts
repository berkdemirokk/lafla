import { readFileSync } from "node:fs";
import { basename, join } from "node:path";

const mobileDir =
  basename(process.cwd()) === "mobile"
    ? process.cwd()
    : join(process.cwd(), "apps", "mobile");

const errors: string[] = [];

function read(relativePath: string): string {
  return readFileSync(join(mobileDir, relativePath), "utf8");
}

function requireIncludes(source: string, expected: string, message: string) {
  if (!source.includes(expected)) errors.push(message);
}

function forbidIncludes(source: string, forbidden: string, message: string) {
  if (source.includes(forbidden)) errors.push(message);
}

const swipeCard = read("components/SwipeSceneCard.tsx");
requireIncludes(
  swipeCard,
  "outputRange: [1.16, 1.08, 1.16]",
  "Scene image scale budget regressed; card should stay framed on mobile.",
);
requireIncludes(
  swipeCard,
  "outputRange: [width * 0.06, 0, -width * 0.06]",
  "Scene image pan budget regressed; parallax should not crop subject matter heavily.",
);
requireIncludes(
  swipeCard,
  "particleCount={3}",
  "Floating particle count should stay capped on scene cards.",
);
forbidIncludes(
  swipeCard,
  "letterSpacing: -",
  "Negative letter spacing is banned on scene cards because Turkish text clips on narrow screens.",
);

const overlay = read("components/AnimatedGradientOverlay.tsx");
requireIncludes(
  overlay,
  "const washMin = 0.035;",
  "Gradient wash opacity budget regressed.",
);
requireIncludes(
  overlay,
  "mode === 'flirt' || mode === 'bar' || mode === 'order' ? 0.10 : 0.08",
  "Gradient pulse opacity budget regressed.",
);
requireIncludes(
  overlay,
  "height: '54%'",
  "Bottom vignette should not cover the lesson visual.",
);

const particles = read("components/FloatingParticles.tsx");
requireIncludes(
  particles,
  "particleCount = 3",
  "Floating particle default count should stay low for older iPhones.",
);
requireIncludes(
  particles,
  "Easing.linear",
  "Particle loop should use explicit linear easing to avoid animation jitter.",
);

console.log(
  JSON.stringify(
    {
      checkedFiles: [
        "components/SwipeSceneCard.tsx",
        "components/AnimatedGradientOverlay.tsx",
        "components/FloatingParticles.tsx",
      ],
      errors,
    },
    null,
    2,
  ),
);

if (errors.length > 0) {
  process.exitCode = 1;
}
