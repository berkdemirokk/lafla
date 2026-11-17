import { localDayKey } from "../day-key";

describe("localDayKey", () => {
  it("uses the device-local calendar day instead of UTC string slicing", () => {
    const date = new Date(2026, 6, 3, 0, 15);

    expect(localDayKey(date)).toBe("2026-07-03");
  });
});
