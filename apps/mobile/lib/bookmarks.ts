// Lafla — Bookmarks (saved scenes).
// Local-first, anonymous-friendly. Users save scenes for quick re-access.
//
// Storage layout (AsyncStorage):
//   lafla.bookmarks -> BookmarkEntry[] (newest first, capped at MAX_BOOKMARKS)
//
// All functions are async and tolerate corrupt/missing storage by returning
// empty / no-op rather than throwing. Mirrors local-progress.ts conventions.

import AsyncStorage from "@react-native-async-storage/async-storage";

const K_BOOKMARKS = "lafla.bookmarks";
const MAX_BOOKMARKS = 100;

export interface BookmarkEntry {
  sceneId: string;
  lessonId: string;
  addedAt: string; // ISO timestamp
  note?: string;
}

async function readAll(): Promise<BookmarkEntry[]> {
  try {
    const raw = await AsyncStorage.getItem(K_BOOKMARKS);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (e): e is BookmarkEntry =>
        e &&
        typeof e === "object" &&
        typeof e.sceneId === "string" &&
        typeof e.lessonId === "string" &&
        typeof e.addedAt === "string",
    );
  } catch {
    return [];
  }
}

async function writeAll(entries: BookmarkEntry[]): Promise<void> {
  try {
    // Cap to most-recent MAX_BOOKMARKS (the list is kept newest-first)
    const capped = entries.slice(0, MAX_BOOKMARKS);
    await AsyncStorage.setItem(K_BOOKMARKS, JSON.stringify(capped));
  } catch {
    // ignore
  }
}

export async function getBookmarks(): Promise<BookmarkEntry[]> {
  return readAll();
}

export async function isBookmarked(sceneId: string): Promise<boolean> {
  const all = await readAll();
  return all.some((e) => e.sceneId === sceneId);
}

export async function addBookmark(
  sceneId: string,
  lessonId: string,
  note?: string,
): Promise<void> {
  const all = await readAll();
  // If already bookmarked, bump it to the top (refresh addedAt)
  const filtered = all.filter((e) => e.sceneId !== sceneId);
  const entry: BookmarkEntry = {
    sceneId,
    lessonId,
    addedAt: new Date().toISOString(),
    ...(note ? { note } : {}),
  };
  filtered.unshift(entry);
  await writeAll(filtered);
}

export async function removeBookmark(sceneId: string): Promise<void> {
  const all = await readAll();
  const next = all.filter((e) => e.sceneId !== sceneId);
  if (next.length === all.length) return; // nothing changed
  await writeAll(next);
}

/**
 * Toggle bookmark. Returns the NEW state:
 *   true  = scene is now bookmarked
 *   false = scene is now unbookmarked
 */
export async function toggleBookmark(
  sceneId: string,
  lessonId: string,
): Promise<boolean> {
  const all = await readAll();
  const exists = all.some((e) => e.sceneId === sceneId);
  if (exists) {
    await writeAll(all.filter((e) => e.sceneId !== sceneId));
    return false;
  }
  const entry: BookmarkEntry = {
    sceneId,
    lessonId,
    addedAt: new Date().toISOString(),
  };
  await writeAll([entry, ...all]);
  return true;
}

export async function getBookmarkCount(): Promise<number> {
  const all = await readAll();
  return all.length;
}

export async function clearBookmarks(): Promise<void> {
  try {
    await AsyncStorage.removeItem(K_BOOKMARKS);
  } catch {
    // ignore
  }
}
