import { recoveryTokensFromUrl, validateNewPassword } from "../auth-recovery";

describe("password recovery", () => {
  it("parses Supabase recovery tokens from URL fragments", () => {
    expect(
      recoveryTokensFromUrl(
        "lafla://reset-password#access_token=access&refresh_token=refresh&type=recovery",
      ),
    ).toEqual({ accessToken: "access", refreshToken: "refresh" });
    expect(recoveryTokensFromUrl("lafla://reset-password?type=recovery")).toBeNull();
    expect(
      recoveryTokensFromUrl(
        "lafla://reset-password#access_token=a&refresh_token=r&type=signup",
      ),
    ).toBeNull();
    expect(
      recoveryTokensFromUrl(
        "lafla://reset-password?source=email#access_token=a&refresh_token=r&type=recovery",
      ),
    ).toEqual({ accessToken: "a", refreshToken: "r" });
  });

  it("requires matching passwords of at least eight characters", () => {
    expect(validateNewPassword("short", "short")).toBe("too_short");
    expect(validateNewPassword("long-pass", "different")).toBe("mismatch");
    expect(validateNewPassword("long-pass", "long-pass")).toBeNull();
  });
});
