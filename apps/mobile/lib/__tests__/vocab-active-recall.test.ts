import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  enqueueVocab,
  evaluateVocabRecall,
} from "../srs-vocab";

describe("vocabulary active recall", () => {
  beforeEach(async () => {
    jest.restoreAllMocks();
    await AsyncStorage.clear();
  });

  it("accepts the produced English answer and a minor long-word typo", () => {
    expect(evaluateVocabRecall("reservation", "reservation")).toBe(true);
    expect(evaluateVocabRecall("reservation", "reservaton")).toBe(true);
  });

  it("rejects an empty, translated, or unrelated answer", () => {
    expect(evaluateVocabRecall("reservation", "")).toBe(false);
    expect(evaluateVocabRecall("reservation", "rezervasyon")).toBe(false);
    expect(evaluateVocabRecall("coffee", "toffee")).toBe(false);
  });

  it("surfaces queue write failures instead of reporting false progress", async () => {
    jest
      .spyOn(AsyncStorage, "setItem")
      .mockRejectedValueOnce(new Error("disk full"));

    await expect(
      enqueueVocab({
        word: "reservation",
        translation: "rezervasyon",
        source_lesson_id: "order.restaurant.1",
        source_lesson_title: "Restaurant",
      }),
    ).rejects.toThrow("disk full");
  });
});
