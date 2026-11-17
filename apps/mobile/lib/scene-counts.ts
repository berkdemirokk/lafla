// Lafla — Sahne sayısı tek kaynak.
//
// Roleplay içeren lesson sayısından türetilir. UI'da gösterilen
// sayılar buradan beslenir: paywall feature/proof, Today "Akış" CTA, ASC
// metadata. Yeni sahne paketi eklendiğinde data/scenes.ts'e import + spread
// koy → bu dosyada tek satır değişmez, sayı otomatik güncellenir.
//
// EŞZAMANLILIK NOTU: asc-sync.ts (Node tsx script) de buradan import eder.
// `SAMPLE_SCENES` saf veri (RN import'u yok); Node tarafından parse edilebilir.

import { allLessons } from "../data/lessons";

/** Bundle'da yer alan oynanabilir sahne sayısı (runtime'da hesaplanır). */
export const SCENE_COUNT = allLessons.filter((lesson) =>
  lesson.exercises.some((exercise) => exercise.type === "roleplay_chat"),
).length;

/**
 * UI'da gösterilecek string. "971" gibi. Yuvarlamak istersek (örn "900+")
 * burada formatlanır. Şu an exact sayı — kullanıcıya tam sayıyı vermek
 * daha güvenilir hissi verir; "+" gibi yuvarlama pazarlama tarafında
 * şüphe yaratabilir.
 */
export const SCENE_COUNT_DISPLAY = String(SCENE_COUNT);

/**
 * Mod sayısı (user-facing chip + paywall feature satırında geçer).
 * 6 lifestyle + IELTS = 7 mod.
 */
export const MODE_COUNT = 7;
export const MODE_COUNT_DISPLAY = String(MODE_COUNT);
