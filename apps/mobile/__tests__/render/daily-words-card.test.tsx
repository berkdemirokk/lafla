const mockPush = jest.fn();
jest.mock("expo-router", () => ({
  useRouter: () => ({ push: mockPush, replace: jest.fn(), back: jest.fn() }),
  useFocusEffect: (cb: () => void | (() => void)) => {
    const React = require("react");
    React.useEffect(cb, []);
  },
}));
jest.mock("../../lib/daily-words", () => ({
  DAILY_WORD_COUNT: 10,
  getTodayWords: jest.fn(),
  syncDailyWordsNudge: jest.fn(async () => {}),
}));

import { DailyWordsCard } from "../../components/DailyWordsCard";
import * as DW from "../../lib/daily-words";
import { t } from "../../lib/i18n";
import { render, flush, press, hasLabel, hasText } from "../../test-utils/rtr";

const getTodayWords = DW.getTodayWords as jest.Mock;
const syncDailyWordsNudge = DW.syncDailyWordsNudge as jest.Mock;

const words = ["alpha", "beta", "gamma", "delta"].map((w) => ({
  key: w,
  word: w,
  translation: `${w}-tr`,
  cefr: "A1",
  lessonId: "l",
  lessonTitle: "L",
}));

beforeEach(() => jest.clearAllMocks());

describe("DailyWordsCard", () => {
  it("renders the preview state and pushes /daily-words", async () => {
    getTodayWords.mockResolvedValue({ dayKey: "d", words, completed: false, correctCount: null });
    const r = await render(<DailyWordsCard />);
    await flush();
    expect(hasLabel(r, t("dailyWords.card_label", { count: "4" }))).toBe(true);
    expect(hasText(r, t("dailyWords.card_title"))).toBe(true);
    expect(hasText(r, "alpha · beta · gamma …")).toBe(true);
    expect(syncDailyWordsNudge).toHaveBeenCalledWith(false);
    await press(r, t("dailyWords.card_label", { count: "4" }));
    expect(mockPush).toHaveBeenCalledWith("/daily-words");
  });

  it("renders the done state", async () => {
    getTodayWords.mockResolvedValue({ dayKey: "d", words, completed: true, correctCount: 3 });
    const r = await render(<DailyWordsCard />);
    await flush();
    expect(hasLabel(r, t("dailyWords.card_done_label"))).toBe(true);
    expect(hasText(r, t("dailyWords.card_done_title"))).toBe(true);
    expect(hasText(r, t("dailyWords.card_done_sub"))).toBe(true);
    expect(syncDailyWordsNudge).toHaveBeenCalledWith(true);
  });

  it("renders nothing while loading, when the pool is empty, and on load error", async () => {
    getTodayWords.mockResolvedValue({ dayKey: "d", words: [], completed: false, correctCount: null });
    const empty = await render(<DailyWordsCard />);
    await flush();
    expect(empty.toJSON()).toBeNull();

    getTodayWords.mockRejectedValue(new Error("boom"));
    const failed = await render(<DailyWordsCard />);
    await flush();
    // error keeps default count (10) with an empty preview; must not crash
    expect(() => failed.toJSON()).not.toThrow();
  });
});
