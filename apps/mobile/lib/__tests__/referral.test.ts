jest.mock("../analytics", () => ({ trackEvent: jest.fn(async () => {}) }));

const mockRpc = jest.fn();

jest.mock("../supabase", () => ({
  supabase: {
    auth: { getUser: jest.fn() },
    from: jest.fn(),
    rpc: (name: string, args: unknown) => mockRpc(name, args),
  },
}));

import AsyncStorage from "@react-native-async-storage/async-storage";
import { redeemReferralCode } from "../referral";

describe("referral redemption", () => {
  beforeEach(async () => {
    jest.clearAllMocks();
    await AsyncStorage.clear();
    mockRpc.mockResolvedValue({ data: true, error: null });
  });

  it.each(["ABC", "ABCDO1", "ABC-23", "DROP TABLE", ""])(
    "rejects invalid code %p without touching the backend",
    async (code) => {
      await expect(redeemReferralCode(code)).resolves.toBe(false);
      expect(mockRpc).not.toHaveBeenCalled();
    },
  );

  it("persists only after the backend accepts a valid code", async () => {
    await expect(redeemReferralCode("abc234")).resolves.toBe(true);
    expect(mockRpc).toHaveBeenCalledWith("redeem_referral_code", {
      input_code: "ABC234",
    });
    await expect(AsyncStorage.getItem("lafla.referral.redeemedCode")).resolves.toBe("ABC234");
  });

  it("keeps the redemption retryable when the backend fails", async () => {
    mockRpc.mockResolvedValue({ data: null, error: { message: "offline" } });
    await expect(redeemReferralCode("ABC234")).resolves.toBe(false);
    await expect(AsyncStorage.getItem("lafla.referral.redeemedCode")).resolves.toBeNull();
  });

  it("rejects an unaccepted RPC response", async () => {
    mockRpc.mockResolvedValue({ data: false, error: null });
    await expect(redeemReferralCode("ABC234")).resolves.toBe(false);
  });
});