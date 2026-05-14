// Lafla — Onboarding progress persistence.
//
// The onboarding flow is multi-step (welcome → name → level → program →
// interests → coach-intro). Users may close the app mid-flow; we persist
// the current step under `lafla.onboarding.step` so we can resume exactly
// where they left off. Cleared once the user finishes the flow (the master
// `lafla.onboarded` flag is the source of truth for "done").
//
// We also expose tiny `setInterests` / `setOnboarded` wrappers here so the
// onboarding screen has a single import surface for everything it persists.

import AsyncStorage from "@react-native-async-storage/async-storage";

const K_STEP = "lafla.onboarding.step";
const K_ONBOARDED = "lafla.onboarded";
const K_INTERESTS = "lafla.interests";

export async function getOnboardingStep(): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(K_STEP);
  } catch {
    return null;
  }
}

export async function setOnboardingStep(step: string | null): Promise<void> {
  try {
    if (step === null) {
      await AsyncStorage.removeItem(K_STEP);
    } else {
      await AsyncStorage.setItem(K_STEP, step);
    }
  } catch {
    // ignore — onboarding resume is a nice-to-have, never blocks the flow.
  }
}

export async function setOnboarded(value: boolean): Promise<void> {
  try {
    if (value) {
      await AsyncStorage.setItem(K_ONBOARDED, "true");
    } else {
      await AsyncStorage.removeItem(K_ONBOARDED);
    }
  } catch {
    // ignore
  }
}

export async function setInterests(interests: string[]): Promise<void> {
  try {
    await AsyncStorage.setItem(K_INTERESTS, JSON.stringify(interests));
  } catch {
    // ignore
  }
}
