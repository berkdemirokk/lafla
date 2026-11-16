import { bootstrapAttAndAds, type AttAdsDeps } from "../att-ads-bootstrap";
import type { AttStatus } from "../att";

function deps(overrides: Partial<AttAdsDeps> = {}) {
  const calls: string[] = [];
  const d: AttAdsDeps = {
    isOnboarded: jest.fn(async () => false),
    requestAttOnce: jest.fn(async (): Promise<AttStatus | null> => {
      calls.push("att");
      return "granted";
    }),
    getAttStatus: jest.fn(async (): Promise<AttStatus> => "not-determined"),
    initAds: jest.fn(async () => {
      calls.push("ads");
    }),
    ...overrides,
  };
  return { d, calls };
}

describe("cold-start ATT + ads sequencing", () => {
  it("does not show ATT or start ads for a user still in onboarding", async () => {
    const { d } = deps();
    const result = await bootstrapAttAndAds(d);
    expect(d.requestAttOnce).not.toHaveBeenCalled();
    expect(d.initAds).not.toHaveBeenCalled();
    expect(result).toEqual({ attRequested: false, adsInitialized: false });
  });

  it("asks ATT once for an onboarded user, then starts ads", async () => {
    const { d, calls } = deps({ isOnboarded: jest.fn(async () => true) });
    const result = await bootstrapAttAndAds(d);
    expect(calls).toEqual(["att", "ads"]);
    expect(result).toEqual({ attRequested: true, adsInitialized: true });
  });

  it("skips the prompt when ATT was already answered and still starts ads", async () => {
    const { d, calls } = deps({
      isOnboarded: jest.fn(async () => true),
      requestAttOnce: jest.fn(async () => null),
    });
    const result = await bootstrapAttAndAds(d);
    expect(calls).toEqual(["ads"]);
    expect(result.attRequested).toBe(false);
  });

  it("starts ads during onboarding only where ATT is already resolved (e.g. Android)", async () => {
    const { d } = deps({ getAttStatus: jest.fn(async () => "granted" as const) });
    const result = await bootstrapAttAndAds(d);
    expect(d.requestAttOnce).not.toHaveBeenCalled();
    expect(result.adsInitialized).toBe(true);
  });

  it("survives ATT and ads failures", async () => {
    const { d } = deps({
      isOnboarded: jest.fn(async () => true),
      requestAttOnce: jest.fn(async () => {
        throw new Error("att");
      }),
      initAds: jest.fn(async () => {
        throw new Error("ads");
      }),
    });
    await expect(bootstrapAttAndAds(d)).resolves.toEqual({
      attRequested: false,
      adsInitialized: false,
    });
  });
});
