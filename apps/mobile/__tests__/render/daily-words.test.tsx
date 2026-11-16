import { act } from "react-test-renderer";

const mockBack = jest.fn();
const mockReplace = jest.fn();
const mockPush = jest.fn();
let mockCanGoBack = true;
jest.mock("expo-router", () => ({
  useRouter: () => ({
    back: mockBack,
    replace: mockReplace,
    push: mockPush,
    canGoBack: () => mockCanGoBack,
  }),
  useFocusEffect: (cb: () => void | (() => void)) => {
    const React = require("react");
    React.useEffect(cb, []);
  },
}));
jest.mock("expo-haptics", () => ({
  selectionAsync: jest.fn(async () => {}),
  notificationAsync: jest.fn(async () => {}),
  NotificationFeedbackType: { Success: "success", Error: "error", Warning: "warning" },
}));
jest.mock("react-native-safe-area-context", () => {
  const { View } = require("react-native");
  return { SafeAreaView: View, SafeAreaProvider: View };
});
jest.mock("expo-status-bar", () => ({ StatusBar: () => null }));
jest.mock("../../lib/tts", () => ({ speak: jest.fn(async () => true) }));
jest.mock("../../lib/analytics", () => ({ trackEvent: jest.fn(async () => {}) }));
jest.mock("../../lib/review-prompt", () => ({ maybeRequestReview: jest.fn(async () => false) }));
jest.mock("../../lib/local-progress", () => ({
  getLocalProfile: jest.fn(async () => ({ current_streak: 3 })),
}));
jest.mock("../../lib/daily-words", () => ({
  getTodayWords: jest.fn(),
  completeTodayWords: jest.fn(),
  getDistractorsFor: jest.fn(),
}));

import DailyWordsScreen from "../../app/daily-words";
import * as DW from "../../lib/daily-words";
import { t } from "../../lib/i18n";
import { render, flush, press, hasLabel, hasText, isDisabled, texts } from "../../test-utils/rtr";

const getTodayWords = DW.getTodayWords as jest.Mock;
const completeTodayWords = DW.completeTodayWords as jest.Mock;
const getDistractorsFor = DW.getDistractorsFor as jest.Mock;

function makeWords(n: number) {
  return Array.from({ length: n }, (_, i) => ({
    key: `word${i}`,
    word: `word${i}`,
    translation: `kelime${i}`,
    example: `Example sentence ${i}.`,
    exampleTr: `Ornek ${i}.`,
    cefr: "A1",
    lessonId: "l1",
    lessonTitle: "L1",
  }));
}

function mockToday(over: Record<string, unknown> = {}, n = 10) {
  getTodayWords.mockResolvedValue({
    dayKey: "2026-11-16",
    words: makeWords(n),
    completed: false,
    correctCount: null,
    ...over,
  });
}

beforeEach(() => {
  jest.clearAllMocks();
  mockCanGoBack = true;
  getDistractorsFor.mockImplementation((w: { key: string }) => [
    `${w.key}-d1`,
    `${w.key}-d2`,
    `${w.key}-d3`,
  ]);
  completeTodayWords.mockImplementation(async (all: Array<{ correct: boolean }>) => ({
    correctCount: all.filter((a) => a.correct).length,
    alreadyCompleted: false,
  }));
});

type R = Awaited<ReturnType<typeof render>>;

async function toCheckPhase() {
  mockToday();
  const r = await render(<DailyWordsScreen />);
  await flush();
  for (let i = 0; i < 9; i += 1) await press(r, t("dailyWords.next_word"));
  expect(hasLabel(r, t("dailyWords.start_check"))).toBe(true);
  await press(r, t("dailyWords.start_check"));
  return r;
}

/** Answer the currently shown question (correct option derived from the Turkish prompt). */
async function answerCurrent(r: R, correct: boolean) {
  const prompt = texts(r).find((s) => /^kelime\d+$/.test(s))!;
  const idx = prompt.replace("kelime", "");
  await press(r, correct ? `word${idx}` : `word${idx}-d1`);
}

async function answerAllButFinish(r: R) {
  for (let i = 0; i < 9; i += 1) {
    await answerCurrent(r, true);
    await press(r, t("common.continue"));
  }
  await answerCurrent(r, true);
}

describe("app/daily-words", () => {
  it("shows loading then the learn phase with 10 words", async () => {
    mockToday();
    const r = await render(<DailyWordsScreen />);
    await flush();
    expect(hasText(r, "word0")).toBe(true);
    expect(hasText(r, "kelime0")).toBe(true);
    expect(hasText(r, "1 / 10")).toBe(true);
    expect(hasLabel(r, t("dailyWords.next_word"))).toBe(true);
  });

  it("pressing next 10 times reaches the check phase", async () => {
    const r = await toCheckPhase();
    expect(hasText(r, t("dailyWords.question_hint"))).toBe(true);
    expect(hasText(r, "1 / 10")).toBe(true);
    expect(isDisabled(r, t("common.continue"))).toBe(true);
  });

  it("answers all 10, finishes, reaches done and calls completeTodayWords once", async () => {
    const r = await toCheckPhase();
    for (let i = 0; i < 10; i += 1) {
      await answerCurrent(r, i % 2 === 0);
      await press(r, i === 9 ? t("dailyWords.finish") : t("common.continue"));
      await flush();
    }
    expect(completeTodayWords).toHaveBeenCalledTimes(1);
    const [results, , dayKey] = completeTodayWords.mock.calls[0]!;
    expect(results).toHaveLength(10);
    expect(results.filter((x: { correct: boolean }) => x.correct)).toHaveLength(5);
    expect(dayKey).toBe("2026-11-16");
    expect(hasText(r, t("dailyWords.done_title"))).toBe(true);
    expect(hasText(r, t("dailyWords.done_score", { correct: "5", total: "10" }))).toBe(true);
    expect(hasLabel(r, t("shareCard.button"))).toBe(true);
  });

  it("double press of finish only completes once", async () => {
    let resolve!: (v: unknown) => void;
    completeTodayWords.mockImplementation(() => new Promise((res) => (resolve = res)));
    const r = await toCheckPhase();
    await answerAllButFinish(r);
    const btn = r.root.findAll(
      (n) =>
        n.props.accessibilityLabel === t("dailyWords.finish") &&
        typeof n.props.onPress === "function",
    )[0]!;
    await act(async () => {
      void btn.props.onPress();
      void btn.props.onPress();
    });
    expect(completeTodayWords).toHaveBeenCalledTimes(1);
    await act(async () => {
      resolve({ correctCount: 10, alreadyCompleted: false });
    });
    await flush();
    expect(hasText(r, t("dailyWords.done_title"))).toBe(true);
    expect(completeTodayWords).toHaveBeenCalledTimes(1);
  });

  it("finish failure shows the error state and does not crash", async () => {
    completeTodayWords.mockRejectedValue(new Error("disk full"));
    const r = await toCheckPhase();
    await answerAllButFinish(r);
    await press(r, t("dailyWords.finish"));
    await flush();
    expect(hasText(r, t("common.load_error_title"))).toBe(true);
    expect(hasLabel(r, t("common.try_again"))).toBe(true);
  });

  it("opening when already completed shows done", async () => {
    mockToday({ completed: true, correctCount: 8 });
    const r = await render(<DailyWordsScreen />);
    await flush();
    expect(hasText(r, t("dailyWords.done_title"))).toBe(true);
    expect(hasText(r, t("dailyWords.done_score", { correct: "8", total: "10" }))).toBe(true);
    expect(completeTodayWords).not.toHaveBeenCalled();
    await press(r, t("dailyWords.back_today"));
    expect(mockBack).toHaveBeenCalled();
  });

  it("done 'back to today' replaces the route when it cannot go back", async () => {
    mockCanGoBack = false;
    mockToday({ completed: true, correctCount: 8 });
    const r = await render(<DailyWordsScreen />);
    await flush();
    await press(r, t("dailyWords.back_today"));
    expect(mockReplace).toHaveBeenCalledWith("/today");
  });

  it("empty pool shows the empty state", async () => {
    mockToday({}, 0);
    const r = await render(<DailyWordsScreen />);
    await flush();
    expect(hasText(r, t("dailyWords.empty_title"))).toBe(true);
    expect(hasText(r, t("dailyWords.empty_body"))).toBe(true);
  });

  it("empty pool marked completed still shows the empty state", async () => {
    mockToday({ completed: true, correctCount: 0 }, 0);
    const r = await render(<DailyWordsScreen />);
    await flush();
    expect(hasText(r, t("dailyWords.empty_title"))).toBe(true);
  });

  it("load failure shows the error state, retry recovers", async () => {
    getTodayWords.mockRejectedValueOnce(new Error("boom"));
    const r = await render(<DailyWordsScreen />);
    await flush();
    expect(hasText(r, t("common.load_error_title"))).toBe(true);
    mockToday();
    await press(r, t("common.try_again"));
    await flush();
    expect(hasText(r, "word0")).toBe(true);
  });
});
