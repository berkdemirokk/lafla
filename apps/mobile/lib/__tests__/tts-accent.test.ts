import { resolveAccentLocale } from "../accent";

describe("accent locale routing", () => {
  it("routes each lab accent to a distinct native locale", () => {
    expect(resolveAccentLocale("american")).toBe("en-US");
    expect(resolveAccentLocale("british")).toBe("en-GB");
    expect(resolveAccentLocale("indian")).toBe("en-IN");
    expect(resolveAccentLocale("irish")).toBe("en-IE");
    expect(resolveAccentLocale("international")).toBe("en-SG");
  });
});
