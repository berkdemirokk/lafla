import { nextSrsInterval } from "../local-progress";

describe("SRS (SM-2 Lite) Algorithm Tests", () => {
  it("should return interval of 1 day if accuracy is low (< 0.6)", () => {
    const initialState = {
      ease_factor: 2.5,
      interval_days: 10,
      consecutive_correct: 3,
    };
    const accuracy = 0.5; // low accuracy
    const result = nextSrsInterval(initialState, accuracy);

    expect(result.interval_days).toBe(1);
    expect(result.consecutive_correct).toBe(0);
    expect(result.ease).toBe(initialState.ease_factor);
  });

  it("should increment consecutive correct and scale interval if accuracy is high", () => {
    const initialState = {
      ease_factor: 2.5,
      interval_days: 1,
      consecutive_correct: 0,
    };
    const accuracy = 0.96; // perfect accuracy (quality = 5)
    const result = nextSrsInterval(initialState, accuracy);

    // cc === 1 -> interval should be 1
    expect(result.consecutive_correct).toBe(1);
    expect(result.interval_days).toBe(1);
    expect(result.ease).toBeGreaterThan(2.5); // ease factor increases
  });

  it("should calculate correct second-interval of 3 days", () => {
    const initialState = {
      ease_factor: 2.6,
      interval_days: 1,
      consecutive_correct: 1,
    };
    const accuracy = 1.0;
    const result = nextSrsInterval(initialState, accuracy);

    // cc === 2 -> interval should be 3
    expect(result.consecutive_correct).toBe(2);
    expect(result.interval_days).toBe(3);
  });

  it("should scale interval by ease factor for consecutive correct > 2", () => {
    const initialState = {
      ease_factor: 2.5,
      interval_days: 3,
      consecutive_correct: 2,
    };
    const accuracy = 1.0;
    const result = nextSrsInterval(initialState, accuracy);

    expect(result.consecutive_correct).toBe(3);
    // interval should be round(3 * 2.6) since ease increases
    expect(result.interval_days).toBe(8); // 3 * 2.6 = 7.8 -> rounded to 8
  });
});
