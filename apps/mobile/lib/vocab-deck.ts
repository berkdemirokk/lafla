// Lafla — Vocab deck progress storage (local-first).
// Tracks which cards in each thematic deck the user has marked as learned.
//
// Storage layout (AsyncStorage):
//   lafla.deck.<deckId>           -> { learnedIds: string[]; lastStudiedAt: string | null }
//   lafla.deck.__index             -> string[] of every deckId we've ever touched
//
// We keep a small index so getOverallVocabStats() can aggregate without
// scanning every AsyncStorage key (which is slow/unavailable on some platforms).

import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY_PREFIX = "lafla.deck.";
const KEY_INDEX = "lafla.deck.__index";

export type DeckProgress = {
  learnedIds: string[];
  lastStudiedAt: string | null;
};

const EMPTY_PROGRESS: DeckProgress = { learnedIds: [], lastStudiedAt: null };

function deckKey(deckId: string): string {
  return `${KEY_PREFIX}${deckId}`;
}

async function readIndex(): Promise<string[]> {
  try {
    const raw = await AsyncStorage.getItem(KEY_INDEX);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as string[]) : [];
  } catch {
    return [];
  }
}

async function addToIndex(deckId: string): Promise<void> {
  try {
    const idx = await readIndex();
    if (!idx.includes(deckId)) {
      idx.push(deckId);
      await AsyncStorage.setItem(KEY_INDEX, JSON.stringify(idx));
    }
  } catch {
    // ignore
  }
}

export async function getDeckProgress(deckId: string): Promise<DeckProgress> {
  try {
    const raw = await AsyncStorage.getItem(deckKey(deckId));
    if (!raw) return { ...EMPTY_PROGRESS };
    const parsed = JSON.parse(raw) as Partial<DeckProgress>;
    return {
      learnedIds: Array.isArray(parsed.learnedIds) ? parsed.learnedIds : [],
      lastStudiedAt:
        typeof parsed.lastStudiedAt === "string" ? parsed.lastStudiedAt : null,
    };
  } catch {
    return { ...EMPTY_PROGRESS };
  }
}

export async function markCardLearned(
  deckId: string,
  cardId: string,
): Promise<void> {
  try {
    const prev = await getDeckProgress(deckId);
    if (prev.learnedIds.includes(cardId)) {
      // Already learned — still bump lastStudiedAt
      const next: DeckProgress = {
        learnedIds: prev.learnedIds,
        lastStudiedAt: new Date().toISOString(),
      };
      await AsyncStorage.setItem(deckKey(deckId), JSON.stringify(next));
      return;
    }
    const next: DeckProgress = {
      learnedIds: [...prev.learnedIds, cardId],
      lastStudiedAt: new Date().toISOString(),
    };
    await AsyncStorage.setItem(deckKey(deckId), JSON.stringify(next));
    await addToIndex(deckId);
  } catch {
    // ignore — local progress is best-effort
  }
}

export async function getOverallVocabStats(): Promise<{
  totalDecks: number;
  totalCardsLearned: number;
}> {
  try {
    const ids = await readIndex();
    if (ids.length === 0) return { totalDecks: 0, totalCardsLearned: 0 };
    const results = await Promise.all(ids.map((id) => getDeckProgress(id)));
    let totalCardsLearned = 0;
    let touchedDecks = 0;
    for (const r of results) {
      if (r.learnedIds.length > 0) touchedDecks += 1;
      totalCardsLearned += r.learnedIds.length;
    }
    return { totalDecks: touchedDecks, totalCardsLearned };
  } catch {
    return { totalDecks: 0, totalCardsLearned: 0 };
  }
}
