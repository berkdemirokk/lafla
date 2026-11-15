const mockRpc = jest.fn();
jest.mock("../supabase", () => ({ supabase: { rpc: (...args: unknown[]) => mockRpc(...args) } }));
jest.mock("../analytics", () => ({ trackEvent: jest.fn().mockResolvedValue(undefined) }));

import { getMyReferralCode, redeemReferralCode } from "../referral";

beforeEach(() => mockRpc.mockReset());

it("only reports redemption after the server accepts the normalized code", async () => {
  mockRpc.mockResolvedValueOnce({ data: false, error: null });
  expect(await redeemReferralCode(" abcd12 ")).toBe(false);
  expect(mockRpc).toHaveBeenCalledWith("redeem_referral_code", { candidate: "ABCD12" });
  mockRpc.mockResolvedValueOnce({ data: true, error: null });
  expect(await redeemReferralCode("abcd12")).toBe(true);
});

it("propagates server errors instead of claiming a code was created or redeemed", async () => {
  const failure = new Error("offline");
  mockRpc.mockResolvedValue({ data: null, error: failure });
  await expect(getMyReferralCode()).rejects.toThrow("offline");
  await expect(redeemReferralCode("ABCD12")).rejects.toThrow("offline");
});
