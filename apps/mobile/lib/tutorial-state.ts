// Lafla — Tutorial / first-time UX state.
//
// 2026-05-21 — Kullanıcı geri bildirimi: "kullanıcı napıcanı bilmeli".
// Yeni kullanıcı home'a girince TikTok'a benziyor ama hangisinin sahne
// hangisinin banner olduğunu, sesle nasıl cevap vereceğini bilmiyor.
//
// Bu module SADECE flag yönetimi yapar — overlay UI components/TutorialOverlay'de.
// Saklama AsyncStorage'da; account silme veya manuel reset clearTutorialState ile.
//
// Felsefe: yetişkin Türk audience (18-35 öğrenci), Duolingo mascot/animasyon
// karşıtı. Tek ekran, 4 madde, "Anladım, başlayalım" → bittiği.

import AsyncStorage from "@react-native-async-storage/async-storage";

const K_HOME_SEEN = "lafla.tutorial.home.seen";

/**
 * Home tutorial overlay daha önce gösterildi mi?
 * False döner ise overlay render edilir.
 * İlk açılışta + dating-app forced-first sonrası sonsuza dek true.
 */
export async function hasSeenHomeTutorial(): Promise<boolean> {
  try {
    const raw = await AsyncStorage.getItem(K_HOME_SEEN);
    return raw === "true";
  } catch {
    // Storage hatası → güvenli fallback: göstermiş gibi davran (kullanıcı
    // overlay'i kaybeder ama uygulama kullanılır halde kalır).
    return true;
  }
}

/**
 * Overlay tek-shot mark — kullanıcı "Başlayalım" basınca veya overlay'i
 * dismiss edince çağrılır. Idempotent.
 */
export async function markHomeTutorialSeen(): Promise<void> {
  try {
    await AsyncStorage.setItem(K_HOME_SEEN, "true");
  } catch {
    // best effort — bir sonraki açılışta tekrar gözükmesi acı bir UX ama
    // veri kaybı değil.
  }
}

/**
 * Test / debug — tutorial'ı sıfırla. Account silme akışında çağrılır.
 */
export async function clearTutorialState(): Promise<void> {
  try {
    await AsyncStorage.removeItem(K_HOME_SEEN);
  } catch {
    // ignore
  }
}
