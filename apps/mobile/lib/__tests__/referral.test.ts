jest.mock("../analytics", () => ({ trackEvent: jest.fn(async () => {}) }));

const mockGetUser = jest.fn();
const mockEq = jest.fn();
const mockUpdate = jest.fn(() => ({ eq: mockEq }));
const mockFrom = jest.fn((_table: string) => ({ update: mockUpdate }));

jest.mock("../supabase", () => ({
  supabase: {
    auth: { getUser: () => mockGetUser() },
    from: (table: string) => mockFrom(table),
  },
}));

import AsyncStorage from "@react-native-async-storage/async-storage";
import { redeemReferralCode } from "../referral";

describe("referral redemption", () => {
  beforeEach(async () => {
    jest.clearAllMocks();
    await AsyncStorage.clear();
    mockGetUser.mockResolvedValue({ data: { user: { id: "user-1" } } });
    mockEq.mockResolvedValue({ error: null });
  });

  it.each(["ABC", "ABCDO1", "ABC-23", "DROP TABLE", ""])(
    "rejects invalid code %p without touching the backend",
    async (code) => {
      await expect(redeemReferralCode(code)).resolves.toBe(false);
      expect(mockFrom).not.toHaveBeenCalled();
    },
  );

  it("persists only after the backend accepts a valid code", async () => {
    await expect(redeemReferralCode("abc234")).resolves.toBe(true);
    expect(mockUpdate).toHaveBeenCalledWith({
      redeemed_referral_code: "ABC234",
    });
    await expect(
      AsyncStorage.getItem("lafla.referral.redeemedCode"),
    ).resolves.toBe("ABC234");
  });

  it("keeps the redemption retryable when the backend fails", async () => {
    mockEq.mockResolvedValue({ error: { message: "offline" } });
    await expect(redeemReferralCode("ABC234")).resolves.toBe(false);
    await expect(
      AsyncStorage.getItem("lafla.referral.redeemedCode"),
    ).resolves.toBeNull();
  });

  it("requires an authenticated user", async () => {
    mockGetUser.mockResolvedValue({ data: { user: null } });
    await expect(redeemReferralCode("ABC234")).resolves.toBe(false);
    expect(mockFrom).not.toHaveBeenCalled();
  });
});
