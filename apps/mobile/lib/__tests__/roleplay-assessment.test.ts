import {
  averageRoleplayScores,
  assessRoleplayScore,
  roleplayAssessmentLabel,
} from "../roleplay-assessment";

describe("roleplay assessment", () => {
  it("calculates independent and assisted averages without hidden weighting", () => {
    expect(averageRoleplayScores([50, 100, 90])).toBe(80);
    expect(averageRoleplayScores([])).toBe(0);
  });

  it("uses qualitative bands without claiming false precision", () => {
    expect(assessRoleplayScore(100)).toBe("goal_met");
    expect(assessRoleplayScore(80)).toBe("goal_met");
    expect(assessRoleplayScore(79)).toBe("close");
    expect(assessRoleplayScore(40)).toBe("close");
    expect(assessRoleplayScore(39)).toBe("unassessed");
  });

  it("provides learner-facing Turkish labels", () => {
    expect(roleplayAssessmentLabel("goal_met")).toBe("Hedef tamamlandı");
    expect(roleplayAssessmentLabel("close")).toBe("Yaklaştın");
    expect(roleplayAssessmentLabel("unassessed")).toBe("Tekrar gerekli");
  });
});
