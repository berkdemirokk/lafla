// Lafla — App Store rating prompt.
//
// The app only had a manual "Rate" row in Settings, so almost nobody rated
// it. This asks at a happy moment instead: right after a strong result, once
// the learner has shown up on several days. Apple caps the native sheet at
// three displays per year anyway; we stay well under that and never ask
// twice within REASK_DAYS.

import AsyncStorage from "@react-native-async-storage/async-storage";
import * as StoreReview from "expo-store-review";

import { getActiveDaysLast7 } from "./metrics";
import { trackEvent } from "./analytics";

const K_LAST_ASKED = "lafla.reviewPrompt.lastAskedAt";
const K_ASK_COUNT = "lafla.reviewPrompt.count";

const MIN_ACTIVE_DAYS = 3;
const REASK_DAYS = 120;
const MAX_ASKS = 3;

export interface ReviewPromptContext {
  /** 0–1 share of the session the learner got right. */
  successRatio: number;
  activeDaysLast7: number;
  lastAskedAt: string | null;
  askCount: number;
  now?: Date;
}

export function shouldAskForReview(ctx: ReviewPromptContext): boolean {
  if (ctx.successRatio < 0.7) return false;
  if (ctx.activeDaysLast7 < MIN_ACTIVE_DAYS) return false;
  if (ctx.askCount >= MAX_ASKS) return false;
  if (ctx.lastAskedAt) {
    const last = new Date(ctx.lastAskedAt).getTime();
    const now = (ctx.now ?? new Date()).getTime();
    if (Number.isFinite(last) && now - last < REASK_DAYS * 86_400_000) return false;
  }
  return true;
}

export async function maybeRequestReview(successRatio: number): Promise<boolean> {
  try {
    const [lastAskedAt, countRaw, activeDaysLast7] = await Promise.all([
      AsyncStorage.getItem(K_LAST_ASKED),
      AsyncStorage.getItem(K_ASK_COUNT),
      getActiveDaysLast7().catch(() => 0),
    ]);
    const askCount = Number.parseInt(countRaw ?? "0", 10) || 0;
    if (!shouldAskForReview({ successRatio, activeDaysLast7, lastAskedAt, askCount })) {
      return false;
    }
    if (!(await StoreReview.isAvailableAsync())) return false;
    await AsyncStorage.multiSet([
      [K_LAST_ASKED, new Date().toISOString()],
      [K_ASK_COUNT, String(askCount + 1)],
    ]);
    await StoreReview.requestReview();
    void trackEvent("review_prompt_shown", { ask_count: askCount + 1 }).catch(() => {});
    return true;
  } catch {
    return false;
  }
}
