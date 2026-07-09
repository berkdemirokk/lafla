import enMessages from "../../locales/en.json";
import trMessages from "../../locales/tr.json";

describe("i18n locale dictionaries", () => {
  it("keeps Turkish and English keys in sync", () => {
    const trKeys = Object.keys(trMessages).sort();
    const enKeys = Object.keys(enMessages).sort();

    expect(enKeys).toEqual(trKeys);
  });
});
