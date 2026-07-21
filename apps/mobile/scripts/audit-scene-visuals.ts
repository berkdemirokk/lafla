import { SAMPLE_SCENES } from "../data/scenes";
import {
  VISUAL_THEME_IMAGES,
  getSceneVisualImage,
  getVisualThemeForScene,
  type VisualTheme,
} from "../lib/scene-visual-theme";

const errors: string[] = [];

const expectedThemes: Array<{
  lessonId: string;
  theme: VisualTheme;
  reason: string;
}> = [
  {
    lessonId: "career.b2.salary_negotiation.1",
    theme: "work_interview",
    reason: "salary negotiation should feel like an interview/offer discussion",
  },
  {
    lessonId: "career.b2.equity_negotiation.1",
    theme: "work_interview",
    reason: "equity negotiation should not fall back to a generic meeting",
  },
  {
    lessonId: "career.b2.feedback_giving_peer.1",
    theme: "work_meeting",
    reason: "peer feedback should be a meeting, not interview stock imagery",
  },
  {
    lessonId: "story.erasmus.5",
    theme: "party",
    reason: "Erasmus welcome party must not look like a campus lecture",
  },
  {
    lessonId: "story.nyc.8",
    theme: "bar",
    reason: "Brooklyn bar meetup must use nightlife/bar visuals",
  },
  {
    lessonId: "daily.expand.22",
    theme: "bank",
    reason: "lost wallet card cancellation is a bank/payment context",
  },
  {
    lessonId: "daily.expand.23",
    theme: "phone",
    reason: "SIM activation is a phone context, not a parcel context",
  },
];

const themeImageEntries = Object.entries(VISUAL_THEME_IMAGES) as Array<
  [VisualTheme, string[]]
>;
for (const [theme, images] of themeImageEntries) {
  if (images.length === 0) {
    errors.push(`Theme ${theme} has no images`);
  }
  for (const image of images) {
    if (!image.startsWith("https://images.unsplash.com/")) {
      errors.push(`Theme ${theme} has a non-Unsplash image URL: ${image}`);
    }
    if (!image.includes("w=1600") || !image.includes("q=90")) {
      errors.push(`Theme ${theme} image is not using the 1600/q90 quality budget: ${image}`);
    }
  }
}

const scenes = SAMPLE_SCENES.filter((scene) => scene.lessonId);
const themeCounts = new Map<VisualTheme, number>();
const imageSet = new Set<string>();

for (const scene of scenes) {
  const theme = getVisualThemeForScene(scene);
  const image = getSceneVisualImage(scene);
  themeCounts.set(theme, (themeCounts.get(theme) ?? 0) + 1);
  imageSet.add(image);

  if (!VISUAL_THEME_IMAGES[theme]?.includes(image)) {
    errors.push(`${scene.lessonId} resolved image outside theme list (${theme})`);
  }
  if (!image.startsWith("https://images.unsplash.com/")) {
    errors.push(`${scene.lessonId} resolved invalid image URL: ${image}`);
  }
}

for (const expectation of expectedThemes) {
  const scene = SAMPLE_SCENES.find((item) => item.lessonId === expectation.lessonId);
  if (!scene) {
    errors.push(`Missing curated visual scene: ${expectation.lessonId}`);
    continue;
  }
  const actual = getVisualThemeForScene(scene);
  if (actual !== expectation.theme) {
    errors.push(
      `${expectation.lessonId} expected ${expectation.theme}, got ${actual}: ${expectation.reason}`,
    );
  }
}

if (themeCounts.size < 40) {
  errors.push(`Theme diversity too low: ${themeCounts.size} themes used`);
}
if (imageSet.size < 90) {
  errors.push(`Distinct visual count too low: ${imageSet.size} images used`);
}

console.log(
  JSON.stringify(
    {
      scenes: scenes.length,
      themesUsed: themeCounts.size,
      distinctImages: imageSet.size,
      curatedExpectations: expectedThemes.length,
      topThemes: [...themeCounts.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8)
        .map(([theme, count]) => ({ theme, count })),
      errors,
    },
    null,
    2,
  ),
);

if (errors.length > 0) {
  process.exitCode = 1;
}
