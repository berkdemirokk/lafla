// Lafla — Crisis Modal.
//
// Full-screen modal that opens when lib/safety-filter detects a crisis signal
// (suicidal ideation, self-harm, abuse) in a user message. It deliberately
// breaks the regular coach flow: the LLM is NOT called, no greeting is shown,
// and the user is presented with empathetic Turkish copy plus prominent
// emergency-resource buttons.
//
// Design choices:
//   - Full-screen modal (not a toast) — the user has to actively choose to
//     dismiss it. We don't want a one-tap-away exit from a crisis nudge.
//   - All copy in Turkish — this is Lafla's primary user locale.
//   - Phone-number buttons use Linking.openURL("tel:...") to launch the
//     system dialer. iOS displays a permission prompt; we accept that UX.
//   - On open, we log a Sentry breadcrumb (no PII, no transcript content)
//     so we can monitor frequency without retaining personal data.

import { useEffect } from "react";
import {
  View,
  Text,
  Pressable,
  Modal,
  StyleSheet,
  Linking,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { tokens } from "../theme";
import { getCrisisResources } from "../lib/safety-filter";
import { addBreadcrumb } from "../lib/sentry";

interface CrisisModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function CrisisModal({ visible, onClose }: CrisisModalProps) {
  const resources = getCrisisResources();

  // Log open as a Sentry breadcrumb — no PII, just the event itself so
  // we can spot abuse/misfire patterns in aggregate.
  useEffect(() => {
    if (visible) {
      addBreadcrumb({
        category: "safety",
        message: "crisis_modal_opened",
      });
    }
  }, [visible]);

  const dial = (raw: string) => {
    // Strip whitespace before handing to tel: — iOS is forgiving but Android
    // dialer parsers vary.
    const tel = raw.replace(/\s+/g, "");
    Linking.openURL(`tel:${tel}`).catch(() => {
      // Surface nothing — the modal stays open so the user can read the
      // number and dial manually.
    });
  };

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={false}
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={styles.title}>{resources.title_tr}</Text>
          <Text style={styles.message}>{resources.message_tr}</Text>

          <View style={styles.linesBlock}>
            {resources.lines.map((line) => (
              <Pressable
                key={line.number}
                style={styles.lineBtn}
                onPress={() => dial(line.number)}
                accessibilityRole="button"
                accessibilityLabel={`${line.name} hattını ara: ${line.number}`}
              >
                <Text style={styles.lineName}>{line.name}</Text>
                <Text style={styles.lineNumber}>{line.number}</Text>
                {line.note_tr ? (
                  <Text style={styles.lineNote}>{line.note_tr}</Text>
                ) : null}
              </Pressable>
            ))}
          </View>

          <Text style={styles.disclaimer}>
            Lafla bir dil öğrenme uygulamasıdır, profesyonel destek hattı
            değildir. Yukarıdaki hatlar 7/24 ulaşılabilirdir ve uzmanlar
            tarafından yönetilmektedir.
          </Text>

          <Pressable
            style={styles.exitBtn}
            onPress={onClose}
            accessibilityRole="button"
            accessibilityLabel="Lafla'ya geri dön"
          >
            <Text style={styles.exitBtnText}>Lafla'ya dön</Text>
          </Pressable>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: tokens.bg.app,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 32,
    gap: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    textAlign: "center",
    marginBottom: 8,
  },
  message: {
    fontSize: 16,
    lineHeight: 24,
    color: tokens.text.secondary,
    textAlign: "center",
    marginBottom: 12,
  },
  linesBlock: {
    gap: 12,
  },
  lineBtn: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    borderWidth: 1,
    borderColor: tokens.border.light,
    paddingVertical: 16,
    paddingHorizontal: 18,
    gap: 4,
  },
  lineName: {
    fontSize: 14,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },
  lineNumber: {
    fontSize: 24,
    fontWeight: tokens.weight.black,
    color: tokens.brand.tertiary,
    letterSpacing: 0.5,
  },
  lineNote: {
    fontSize: 13,
    color: tokens.text.secondary,
    lineHeight: 18,
    marginTop: 2,
  },
  disclaimer: {
    fontSize: 12,
    color: tokens.text.tertiary,
    textAlign: "center",
    lineHeight: 17,
    marginTop: 8,
    paddingHorizontal: 12,
  },
  exitBtn: {
    marginTop: 12,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.secondary,
    alignItems: "center",
  },
  exitBtnText: {
    fontSize: 15,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.onSecondary,
  },
});
