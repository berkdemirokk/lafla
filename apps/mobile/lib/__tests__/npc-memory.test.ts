import {
  memoryPromptForRelationship,
  type NpcRelationship,
} from "../npc-relationships";

const relationship: NpcRelationship = {
  id: "workplace:Mia",
  name: "Mia",
  bucket: "workplace",
  sceneCount: 2,
  firstMet: "2026-06-01T00:00:00.000Z",
  lastInteraction: "2026-06-20T00:00:00.000Z",
  modes: ["work"],
  episodes: [
    {
      scenarioId: "work.interview.1",
      title: "İş görüşmesi",
      mode: "work",
      outcome: "goal_met",
      occurredAt: "2026-06-20T00:00:00.000Z",
    },
  ],
};

describe("NPC episodic memory", () => {
  it("turns the latest work episode into a natural callback", () => {
    expect(memoryPromptForRelationship(relationship)).toMatch(
      /remember.*work conversation/i,
    );
  });

  it("does not pretend to remember when there is no episode", () => {
    expect(memoryPromptForRelationship({ ...relationship, episodes: [] })).toBeNull();
  });
});
