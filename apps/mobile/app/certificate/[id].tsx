// Lafla — Certificate detail screen.
//
// Shows the full bilingual certificate preview (CertificatePreview component)
// plus three share actions:
//   1. "PDF olarak indir" — generateCertificatePDF + native share sheet.
//   2. "LinkedIn'e paylaş" — opens LinkedIn's offsite-share URL.
//   3. "Görsel olarak kaydet" — same flow as #1 but framed for LinkedIn feed
//      (the PDF is a single-page A4 — most LinkedIn users will screenshot or
//      drag into their feed as a doc post).
//
// Routed from /certificate (the list screen) via router.push(`/certificate/${id}`).
//
// REQUIRED PACKAGES (must be installed for full sharing functionality):
//   - expo-print     (HTML → PDF)
//   - expo-sharing   (native share sheet)
// Without these the buttons fall back to expo-linking for the LinkedIn URL,
// and the PDF/image actions surface an Alert.

import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  ActivityIndicator,
  Alert,
  Linking,
  useWindowDimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { tokens } from "../../theme";
import { CertificatePreview } from "../../components/CertificatePreview";
import {
  buildLinkedInShareURL,
  generateCertificatePDF,
  getCertificateById,
  type CertificateData,
} from "../../lib/certificate";

export default function CertificateDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { width } = useWindowDimensions();
  const [cert, setCert] = useState<CertificateData | null | undefined>(
    undefined,
  );
  const [busy, setBusy] = useState<"pdf" | "image" | "linkedin" | null>(null);

  useEffect(() => {
    if (!id) {
      setCert(null);
      return;
    }
    void getCertificateById(id).then(setCert);
  }, [id]);

  // Preview takes the available width minus horizontal padding.
  const previewWidth = Math.min(width - 32, 720);

  // -----------------------------------------------------------------------
  // Share actions
  // -----------------------------------------------------------------------

  const onSharePDF = async () => {
    if (!cert || busy) return;
    setBusy("pdf");
    try {
      const uri = await generateCertificatePDF(cert);
      let sharedOk = false;
      try {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const Sharing = require("expo-sharing") as {
          isAvailableAsync: () => Promise<boolean>;
          shareAsync: (
            url: string,
            opts?: { mimeType?: string; dialogTitle?: string; UTI?: string },
          ) => Promise<void>;
        };
        if (await Sharing.isAvailableAsync()) {
          await Sharing.shareAsync(uri, {
            mimeType: "application/pdf",
            dialogTitle: "Lafla Sertifikası",
            UTI: "com.adobe.pdf",
          });
          sharedOk = true;
        }
      } catch {
        // fall through to alert
      }
      if (!sharedOk) {
        Alert.alert(
          "PDF hazır",
          `Dosya kaydedildi:\n${uri}\n\nPaylaşım için expo-sharing'i yükle.`,
        );
      }
    } catch (err) {
      Alert.alert(
        "PDF oluşturulamadı",
        "Lütfen expo-print paketinin yüklü olduğundan emin ol.\n\n" +
          (err instanceof Error ? err.message : ""),
      );
    } finally {
      setBusy(null);
    }
  };

  const onShareLinkedIn = async () => {
    if (!cert || busy) return;
    setBusy("linkedin");
    try {
      const url = buildLinkedInShareURL(cert);
      const canOpen = await Linking.canOpenURL(url);
      if (canOpen) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Açılamadı", "LinkedIn paylaşım URL'si açılamadı.");
      }
    } finally {
      setBusy(null);
    }
  };

  const onSaveImage = async () => {
    if (!cert || busy) return;
    setBusy("image");
    try {
      // Same generator — the user can open the PDF and save the first page as
      // an image from their gallery. A dedicated PNG export would need
      // react-native-view-shot, which isn't on the dependency list.
      const uri = await generateCertificatePDF(cert);
      let sharedOk = false;
      try {
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const Sharing = require("expo-sharing") as {
          isAvailableAsync: () => Promise<boolean>;
          shareAsync: (url: string, opts?: object) => Promise<void>;
        };
        if (await Sharing.isAvailableAsync()) {
          await Sharing.shareAsync(uri, {
            dialogTitle: "Lafla Sertifikası — Görsel olarak kaydet",
          });
          sharedOk = true;
        }
      } catch {
        // fall through
      }
      if (!sharedOk) {
        Alert.alert("Görsel hazır", `Dosya: ${uri}`);
      }
    } catch (err) {
      Alert.alert(
        "Görsel hazırlanamadı",
        err instanceof Error ? err.message : "Bilinmeyen hata",
      );
    } finally {
      setBusy(null);
    }
  };

  // -----------------------------------------------------------------------
  // Render
  // -----------------------------------------------------------------------

  if (cert === undefined) {
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <View style={styles.centered}>
          <ActivityIndicator color={tokens.brand.tertiary} />
        </View>
      </SafeAreaView>
    );
  }

  if (cert === null) {
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <StatusBar style="dark" />
        <View style={styles.header}>
          <Pressable
            onPress={() => router.back()}
            style={styles.backBtn}
            hitSlop={12}
          >
            <Text style={styles.backText}>← Geri</Text>
          </Pressable>
          <Text style={styles.title}>Sertifika</Text>
          <View style={styles.spacer} />
        </View>
        <View style={styles.centered}>
          <Text style={styles.notFoundTitle}>Sertifika bulunamadı.</Text>
          <Text style={styles.notFoundBody}>
            Bu sertifika silinmiş veya başka bir cihazda kazanılmış olabilir.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Pressable
          onPress={() => router.back()}
          style={styles.backBtn}
          hitSlop={12}
        >
          <Text style={styles.backText}>← Geri</Text>
        </Pressable>
        <Text style={styles.title}>{cert.level} Sertifikası</Text>
        <View style={styles.spacer} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.previewWrap}>
          <CertificatePreview cert={cert} width={previewWidth} />
        </View>

        <Text style={styles.sectionLabel}>Paylaşım</Text>

        <View style={styles.actions}>
          <ActionButton
            primary
            label="PDF olarak indir"
            sub="Tam çözünürlüklü, A4 yatay"
            onPress={onSharePDF}
            loading={busy === "pdf"}
            disabled={busy !== null}
          />
          <ActionButton
            label="LinkedIn'e paylaş"
            sub="lafla.app/verify bağlantısı ile"
            onPress={onShareLinkedIn}
            loading={busy === "linkedin"}
            disabled={busy !== null}
          />
          <ActionButton
            label="Görsel olarak kaydet"
            sub="Akışa eklemek için"
            onPress={onSaveImage}
            loading={busy === "image"}
            disabled={busy !== null}
          />
        </View>

        <View style={styles.meta}>
          <Text style={styles.metaRow}>
            <Text style={styles.metaLabel}>Sertifika no: </Text>
            {cert.serialNumber}
          </Text>
          <Text style={styles.metaRow}>
            <Text style={styles.metaLabel}>Veren: </Text>
            {cert.issuerName}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------------------
// Action button (local — matches the visual weight of the Button component
// but supports a 2-line sub-label).
// ---------------------------------------------------------------------------

function ActionButton({
  label,
  sub,
  onPress,
  primary,
  loading,
  disabled,
}: {
  label: string;
  sub: string;
  onPress: () => void;
  primary?: boolean;
  loading?: boolean;
  disabled?: boolean;
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled || loading}
      style={({ pressed }) => [
        styles.actionBtn,
        primary && styles.actionBtnPrimary,
        pressed && !disabled && styles.actionBtnPressed,
        disabled && styles.actionBtnDisabled,
      ]}
    >
      {loading ? (
        <ActivityIndicator
          color={primary ? tokens.text.onPrimary : tokens.text.primary}
        />
      ) : (
        <>
          <Text
            style={[
              styles.actionLabel,
              primary && styles.actionLabelPrimary,
            ]}
          >
            {label}
          </Text>
          <Text
            style={[
              styles.actionSub,
              primary && styles.actionSubPrimary,
            ]}
          >
            {sub}
          </Text>
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 56,
  },
  backBtn: { width: 70 },
  backText: { color: tokens.text.secondary, fontSize: 15 },
  title: {
    fontSize: 20,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
  },
  spacer: { width: 70 },
  content: {
    padding: 16,
    paddingBottom: 40,
  },
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  notFoundTitle: {
    fontSize: 17,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  notFoundBody: {
    fontSize: 14,
    color: tokens.text.secondary,
    marginTop: 8,
    textAlign: "center",
  },
  previewWrap: {
    alignItems: "center",
    marginBottom: 28,
  },
  sectionLabel: {
    fontSize: 12,
    fontWeight: tokens.weight.bold,
    letterSpacing: 1.5,
    color: tokens.text.secondary,
    textTransform: "uppercase",
    marginBottom: 12,
    marginLeft: 4,
  },
  actions: {
    gap: 10,
  },
  actionBtn: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    borderWidth: 1,
    borderColor: tokens.border.light,
  },
  actionBtnPrimary: {
    backgroundColor: tokens.brand.primary,
    borderColor: tokens.brand.primary,
  },
  actionBtnPressed: {
    opacity: 0.88,
    transform: [{ scale: 0.99 }],
  },
  actionBtnDisabled: {
    opacity: 0.5,
  },
  actionLabel: {
    fontSize: 16,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  actionLabelPrimary: {
    color: tokens.text.onPrimary,
  },
  actionSub: {
    fontSize: 12,
    color: tokens.text.secondary,
    marginTop: 2,
  },
  actionSubPrimary: {
    color: tokens.text.onPrimary,
    opacity: 0.7,
  },
  meta: {
    marginTop: 28,
    paddingTop: 18,
    borderTopWidth: 1,
    borderTopColor: tokens.border.light,
    gap: 8,
  },
  metaRow: {
    fontSize: 12,
    color: tokens.text.secondary,
  },
  metaLabel: {
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
});
