import { SAMPLE_SCENES } from "../../data/scenes";

function isCoffeeContext(scene: { skillId: string; title: string; description: string }) {
  const text = `${scene.skillId} ${scene.title} ${scene.description}`.toLowerCase();
  return (
    scene.skillId.includes("cafe") ||
    text.includes("kafe") ||
    text.includes("cafe") ||
    text.includes("coffee") ||
    text.includes("kahve")
  );
}

describe("scene metadata polish", () => {
  it("does not leave generic coffee emoji on non-coffee scenes", () => {
    const mismatches = SAMPLE_SCENES.filter(
      (scene) => scene.emoji === "☕" && !isCoffeeContext(scene),
    ).map((scene) => ({
      lessonId: scene.lessonId,
      title: scene.title.replace(/\n/g, " "),
    }));

    expect(mismatches).toEqual([]);
  });

  it("normalizes daily expanded scene emoji to the actual topic", () => {
    expect(SAMPLE_SCENES.find((s) => s.lessonId === "daily.expand.1")?.emoji).toBe(
      "🩺",
    );
    expect(SAMPLE_SCENES.find((s) => s.lessonId === "daily.expand.22")?.emoji).toBe(
      "💳",
    );
    expect(SAMPLE_SCENES.find((s) => s.lessonId === "daily.expand.23")?.emoji).toBe(
      "📱",
    );
    expect(SAMPLE_SCENES.find((s) => s.lessonId === "daily.expand.45")?.emoji).toBe(
      "☕",
    );
  });
});
