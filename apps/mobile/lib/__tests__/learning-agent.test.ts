import { decideNextLearningAction, type LearningAgentSignals } from "../learning-agent";

const base: LearningAgentSignals = {
  plan: [{ id: "s1", lessonId: "lesson-1", skillId: "work.email", title: "E-posta", description: "", emoji: "", durationMin: 3, mode: "work" }],
  dueReviews: 0,
  streakAtRisk: false,
  activeMistakes: [],
  dominantMistakeLabel: null,
  weakestSkillId: null,
};

describe("learning agent", () => {
  it("protects due repetition before every other prompt", () => {
    const result = decideNextLearningAction({ ...base, dueReviews: 2, activeMistakes: [{ patternId: "a", count: 8 }] });
    expect(result.action.kind).toBe("review");
    expect(result.reason).toBe("due-review");
  });

  it("assigns a drill for a repeated error", () => {
    const result = decideNextLearningAction({ ...base, activeMistakes: [{ patternId: "wrong-preposition", count: 2 }], dominantMistakeLabel: "edat seçimi" });
    expect(result.action).toEqual({ kind: "mistake-drill", patternId: "wrong-preposition" });
  });

  it("uses the daily plan and prioritizes its weakest matching skill", () => {
    const plan = [...base.plan, { ...base.plan[0], id: "s2", lessonId: "lesson-2", skillId: "daily.smalltalk" }];
    const result = decideNextLearningAction({ ...base, plan, weakestSkillId: "daily.smalltalk" });
    expect(result.action).toEqual({ kind: "scenario", lessonId: "lesson-2" });
    expect(result.reason).toBe("weak-skill");
  });
});
