import trMessages from "../../locales/tr.json";
import enMessages from "../../locales/en.json";
import {
  LAFLA_APP_STORE_URL,
  buildShareCardModel,
  buildShareText,
  pickShareWords,
  type Translate,
} from "../daily-words-share";

function translator(messages: Record<string, string>): Translate {
  return (key, vars) => {
    const raw = messages[key];
    if (raw === undefined) throw new Error(`missing key ${key}`);
    return raw.replace(/\{(\w+)\}/g, (m, name: string) => vars?.[name] ?? m);
  };
}

const tr = translator(trMessages as Record<string, string>);
const en = translator(enMessages as Record<string, string>);

const words = [
  { word: "borrow", translation: "ödünç almak" },
  { word: "  ", translation: "boş" },
  { word: "afford", translation: "parası yetmek" },
  { word: "remind", translation: "hatırlatmak" },
  { word: "suggest", translation: "önermek" },
  { word: "avoid", translation: "kaçınmak" },
];

describe("daily words share content", () => {
  it("uses the Turkish App Store URL for the Lafla app id", () => {
    expect(LAFLA_APP_STORE_URL).toBe("https://apps.apple.com/tr/app/id6769138297");
  });

  it("picks at most four valid words, skipping blanks", () => {
    expect(pickShareWords(words).map((w) => w.word)).toEqual([
      "borrow",
      "afford",
      "remind",
      "suggest",
    ]);
    expect(pickShareWords([])).toEqual([]);
  });

  it("builds the Turkish card model with score, streak and link", () => {
    const m = buildShareCardModel({ correct: 8, total: 10, streak: 5, words }, tr);
    expect(m.headline).toBe("Bugün 10 yeni İngilizce kelime öğrendim");
    expect(m.score).toBe("Skor: 8/10");
    expect(m.streak).toContain("5");
    expect(m.words).toHaveLength(4);
    expect(m.url).toBe(LAFLA_APP_STORE_URL);
    expect(m.accessibilityLabel).toContain("borrow: ödünç almak");
  });

  it("hides the streak when there is none and clamps bad numbers", () => {
    const m = buildShareCardModel({ correct: 14, total: 10, streak: 0, words: [] }, tr);
    expect(m.streak).toBeNull();
    expect(m.score).toBe("Skor: 10/10");
    const n = buildShareCardModel({ correct: NaN, total: -3, streak: NaN, words: [] }, tr);
    expect(n.score).toBe("Skor: 0/0");
    expect(n.streak).toBeNull();
  });

  it("builds a plain-text fallback that always contains the link", () => {
    const text = buildShareText({ correct: 7, total: 10, streak: 3, words }, tr);
    expect(text).toContain("Bugün 10 yeni İngilizce kelime öğrendim (Skor: 7/10)");
    expect(text).toContain("• borrow = ödünç almak");
    expect(text).not.toContain("avoid");
    expect(text.trim().endsWith(LAFLA_APP_STORE_URL)).toBe(true);

    const bare = buildShareText({ correct: 0, total: 10, streak: 0, words: [] }, en);
    expect(bare).toContain("I learned 10 new English words today");
    expect(bare).not.toContain("streak");
    expect(bare).toContain(LAFLA_APP_STORE_URL);
  });
});
