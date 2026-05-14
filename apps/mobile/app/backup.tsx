// Lafla — Backup + Cloud Restore screen (Pro feature).
//
// Lets the user back up their local progress to Supabase Storage, browse and
// restore previous cloud backups, export/import a JSON file, and (in the
// danger zone) wipe local state entirely.
//
// Integration note for /settings.tsx (do NOT edit settings.tsx here):
//   - Add a row under the "HESAP" section:
//       <Row label="Yedek + Geri Yükleme" onPress={() => router.push("/backup")} />
//   - Place it near the "Hesabımı sil" row.

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Alert,
  ActivityIndicator,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/Button";
import { tokens } from "../theme";
import {
  uploadBackupToCloud,
  listCloudBackups,
  restoreFromCloud,
  deleteCloudBackup,
  exportBackupAsJSON,
  restoreFromJSON,
  getLastBackupAt,
  getAutoBackupMode,
  setAutoBackupMode,
  wipeAllLocalData,
  type AutoBackupMode,
  type CloudBackupListItem,
} from "../lib/backup";
import { isPremium } from "../lib/iap";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatRelativeTime(iso: string | null): string {
  if (!iso) return "Henüz yedek yok";
  const t = new Date(iso).getTime();
  if (!Number.isFinite(t)) return "Bilinmeyen zaman";
  const diffMs = Date.now() - t;
  if (diffMs < 60_000) return "Az önce";
  const m = Math.floor(diffMs / 60_000);
  if (m < 60) return `${m} dakika önce`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h} saat önce`;
  const d = Math.floor(h / 24);
  if (d < 7) return `${d} gün önce`;
  const w = Math.floor(d / 7);
  if (w < 5) return `${w} hafta önce`;
  return new Date(iso).toLocaleDateString("tr-TR");
}

function formatFileDate(iso: string): string {
  if (!iso) return "—";
  try {
    return new Date(iso).toLocaleString("tr-TR");
  } catch {
    return iso;
  }
}

// ---------------------------------------------------------------------------
// Screen
// ---------------------------------------------------------------------------

export default function BackupScreen() {
  const router = useRouter();

  const [premium, setPremium] = useState<boolean | null>(null);
  const [lastAt, setLastAt] = useState<string | null>(null);
  const [auto, setAuto] = useState<AutoBackupMode>("off");
  const [cloudList, setCloudList] = useState<CloudBackupListItem[]>([]);
  const [uploading, setUploading] = useState(false);
  const [restoring, setRestoring] = useState(false);
  const [listing, setListing] = useState(false);

  // Export / import
  const [exportJson, setExportJson] = useState<string | null>(null);
  const [importJson, setImportJson] = useState("");
  const [importing, setImporting] = useState(false);

  // Danger zone
  const [wipeOpen, setWipeOpen] = useState(false);
  const [wipeConfirm, setWipeConfirm] = useState("");
  const [wiping, setWiping] = useState(false);

  const refresh = useCallback(async () => {
    setListing(true);
    try {
      const [p, last, am, list] = await Promise.all([
        isPremium().catch(() => false),
        getLastBackupAt().catch(() => null),
        getAutoBackupMode().catch(() => "off" as AutoBackupMode),
        listCloudBackups().catch(() => []),
      ]);
      setPremium(p);
      setLastAt(last);
      setAuto(am);
      setCloudList(list);
    } finally {
      setListing(false);
    }
  }, []);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  // ----- Cloud actions -----

  const onUpload = async () => {
    if (uploading) return;
    setUploading(true);
    try {
      const res = await uploadBackupToCloud();
      if (res.ok) {
        Alert.alert("Yedek yüklendi", "İlerlemen güvende.");
        await refresh();
      } else {
        Alert.alert("Yüklenemedi", res.error ?? "Bilinmeyen hata.");
      }
    } finally {
      setUploading(false);
    }
  };

  const onRestoreCloud = (fileName: string, createdAt: string) => {
    Alert.alert(
      "Yedekten geri yükle?",
      `Bu işlem mevcut verilerini bu yedekle değiştirecek (${formatFileDate(
        createdAt,
      )}). Devam mı?`,
      [
        { text: "Vazgeç", style: "cancel" },
        {
          text: "Geri yükle",
          style: "destructive",
          onPress: async () => {
            setRestoring(true);
            try {
              const res = await restoreFromCloud(fileName);
              if (res.ok) {
                Alert.alert(
                  "Geri yüklendi",
                  `${res.restoredKeys} anahtar geri yüklendi. Uygulamayı yeniden başlat.`,
                );
                await refresh();
              } else {
                Alert.alert(
                  "Geri yüklenemedi",
                  res.error ?? "Bilinmeyen hata.",
                );
              }
            } finally {
              setRestoring(false);
            }
          },
        },
      ],
    );
  };

  const onDeleteCloud = (fileName: string) => {
    Alert.alert(
      "Yedeği sil?",
      "Bu bulut yedeği kalıcı olarak silinecek. Yerel verilerin etkilenmez.",
      [
        { text: "Vazgeç", style: "cancel" },
        {
          text: "Sil",
          style: "destructive",
          onPress: async () => {
            const res = await deleteCloudBackup(fileName);
            if (res.ok) {
              await refresh();
            } else {
              Alert.alert("Silinemedi", res.error ?? "Bilinmeyen hata.");
            }
          },
        },
      ],
    );
  };

  const onToggleAuto = async (mode: AutoBackupMode) => {
    setAuto(mode);
    await setAutoBackupMode(mode);
  };

  // ----- Export / Import -----

  const onExport = async () => {
    try {
      const json = await exportBackupAsJSON();
      setExportJson(json);
      // Future: when expo-sharing is installed, hand the JSON to the share
      // sheet. For now we expose it as text the user can copy/paste.
    } catch {
      Alert.alert("Hata", "Yedek oluşturulamadı.");
    }
  };

  const onImport = async () => {
    if (!importJson.trim()) {
      Alert.alert("Boş giriş", "Önce yedek metnini yapıştır.");
      return;
    }
    Alert.alert(
      "Dosyadan geri yükle?",
      "Bu işlem mevcut verilerini değiştirecek. Devam mı?",
      [
        { text: "Vazgeç", style: "cancel" },
        {
          text: "Geri yükle",
          style: "destructive",
          onPress: async () => {
            setImporting(true);
            try {
              const res = await restoreFromJSON(importJson);
              if (res.ok) {
                Alert.alert(
                  "Geri yüklendi",
                  `${res.restoredKeys} anahtar geri yüklendi. Uygulamayı yeniden başlat.`,
                );
                setImportJson("");
                await refresh();
              } else {
                Alert.alert(
                  "Geri yüklenemedi",
                  res.error ?? "Yedek formatı tanınamadı.",
                );
              }
            } finally {
              setImporting(false);
            }
          },
        },
      ],
    );
  };

  // ----- Danger zone -----

  const onWipe = async () => {
    if (wipeConfirm !== "SİL") return;
    setWiping(true);
    try {
      const res = await wipeAllLocalData();
      Alert.alert(
        "Veriler silindi",
        `${res.removed} anahtar silindi. Uygulamayı yeniden başlat.`,
      );
      setWipeOpen(false);
      setWipeConfirm("");
      await refresh();
    } finally {
      setWiping(false);
    }
  };

  const lastLabel = useMemo(() => formatRelativeTime(lastAt), [lastAt]);

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>← Geri</Text>
        </Pressable>
        <Text style={styles.title}>Yedek + Geri Yükleme</Text>
        <View style={styles.spacer} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Status */}
        <View style={styles.statusCard}>
          <Text style={styles.statusLabel}>Son yedek</Text>
          <Text style={styles.statusValue}>{lastLabel}</Text>
        </View>

        {/* Pro gate */}
        {premium === false && (
          <View style={styles.proCard}>
            <Text style={styles.proTitle}>Bulut yedek Pro özelliği</Text>
            <Text style={styles.proBody}>
              İlerlemeni güvenli şekilde yedekle, yeni cihaza geri yükle. Pro üyelik gerekir.
            </Text>
            <View style={styles.proCtaWrap}>
              <Button
                label="Pro üyeliğe geç"
                onPress={() => router.push("/paywall" as never)}
              />
            </View>
          </View>
        )}

        {/* Cloud */}
        <Section title="BULUT YEDEK">
          <View style={styles.actionRow}>
            <Button
              label={uploading ? "Yükleniyor..." : "Şimdi yedekle"}
              onPress={onUpload}
              disabled={uploading || premium === false}
              loading={uploading}
            />
          </View>

          {/* Auto cadence (preference only — scheduling later) */}
          <View style={styles.autoCard}>
            <Text style={styles.autoLabel}>Otomatik yedekle</Text>
            <View style={styles.segment}>
              {(["off", "daily", "weekly"] as AutoBackupMode[]).map((m) => (
                <Pressable
                  key={m}
                  onPress={() => onToggleAuto(m)}
                  style={[
                    styles.segmentBtn,
                    auto === m && styles.segmentBtnActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.segmentText,
                      auto === m && styles.segmentTextActive,
                    ]}
                  >
                    {m === "off" ? "Kapalı" : m === "daily" ? "Günlük" : "Haftalık"}
                  </Text>
                </Pressable>
              ))}
            </View>
            <Text style={styles.autoHint}>
              Tercihin kaydedilir. Otomatik zamanlama yakında.
            </Text>
          </View>

          <Text style={styles.subHeading}>Bulut yedeklerin</Text>
          {listing ? (
            <ActivityIndicator
              size="small"
              color={tokens.brand.tertiary}
              style={{ paddingVertical: 12 }}
            />
          ) : cloudList.length === 0 ? (
            <Text style={styles.emptyText}>
              Henüz bulut yedek yok. Yukarıdan başlat.
            </Text>
          ) : (
            cloudList.map((f) => (
              <View key={f.fileName} style={styles.backupRow}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.backupRowTitle}>
                    {formatFileDate(f.createdAt)}
                  </Text>
                  <Text style={styles.backupRowSub}>{f.sizeKb} KB</Text>
                </View>
                <Pressable
                  style={styles.smallBtn}
                  onPress={() => onRestoreCloud(f.fileName, f.createdAt)}
                  disabled={restoring}
                >
                  <Text style={styles.smallBtnText}>Geri yükle</Text>
                </Pressable>
                <Pressable
                  style={[styles.smallBtn, styles.smallBtnDanger]}
                  onPress={() => onDeleteCloud(f.fileName)}
                >
                  <Text
                    style={[styles.smallBtnText, styles.smallBtnTextDanger]}
                  >
                    Sil
                  </Text>
                </Pressable>
              </View>
            ))
          )}
        </Section>

        {/* Export / Import */}
        <Section title="DOSYA OLARAK">
          <View style={styles.actionRow}>
            <Button label="Dosya olarak indir" onPress={onExport} />
          </View>
          {exportJson && (
            <View style={styles.exportBox}>
              <Text style={styles.exportLabel}>
                Yedek hazır ({Math.round(exportJson.length / 1024)} KB). Kopyala
                veya cihazına kaydet:
              </Text>
              <TextInput
                value={exportJson}
                multiline
                style={styles.exportText}
                editable={false}
                selectTextOnFocus
              />
            </View>
          )}

          <Text style={styles.subHeading}>Dosyadan geri yükle</Text>
          <TextInput
            value={importJson}
            onChangeText={setImportJson}
            placeholder="Yedek JSON metnini buraya yapıştır"
            placeholderTextColor={tokens.text.tertiary}
            multiline
            style={styles.importInput}
          />
          <View style={styles.actionRow}>
            <Button
              label={importing ? "Geri yükleniyor..." : "Dosyadan geri yükle"}
              onPress={onImport}
              disabled={importing || !importJson.trim()}
              loading={importing}
              variant="secondary"
            />
          </View>
        </Section>

        {/* Danger zone */}
        <Section title="TEHLİKELİ BÖLGE">
          <Text style={styles.dangerCopy}>
            Tüm yerel verilerin (ilerleme, koç hafızası, başarımlar) silinecek.
            Bu işlem geri alınamaz.
          </Text>
          {!wipeOpen ? (
            <Pressable
              style={styles.dangerBtn}
              onPress={() => setWipeOpen(true)}
            >
              <Text style={styles.dangerBtnText}>Tüm verilerimi sil</Text>
            </Pressable>
          ) : (
            <View style={styles.wipeBox}>
              <Text style={styles.wipeLabel}>
                Onaylamak için &quot;SİL&quot; yaz:
              </Text>
              <TextInput
                value={wipeConfirm}
                onChangeText={setWipeConfirm}
                placeholder="SİL"
                placeholderTextColor={tokens.text.tertiary}
                style={styles.wipeInput}
                autoCapitalize="characters"
                autoCorrect={false}
              />
              <View style={styles.wipeRow}>
                <Pressable
                  style={styles.wipeCancel}
                  onPress={() => {
                    setWipeOpen(false);
                    setWipeConfirm("");
                  }}
                >
                  <Text style={styles.wipeCancelText}>Vazgeç</Text>
                </Pressable>
                <Pressable
                  style={[
                    styles.wipeConfirmBtn,
                    wipeConfirm !== "SİL" && styles.wipeConfirmBtnDisabled,
                  ]}
                  onPress={onWipe}
                  disabled={wipeConfirm !== "SİL" || wiping}
                >
                  <Text style={styles.wipeConfirmText}>
                    {wiping ? "Siliniyor..." : "Kalıcı sil"}
                  </Text>
                </Pressable>
              </View>
            </View>
          )}
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
}

// ---------------------------------------------------------------------------
// Section + Row helpers
// ---------------------------------------------------------------------------

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionLabel}>{title}</Text>
      <View style={styles.sectionInner}>{children}</View>
    </View>
  );
}

// ---------------------------------------------------------------------------
// Styles
// ---------------------------------------------------------------------------

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
    padding: tokens.spacing.md,
    paddingBottom: 80,
  },

  // Status
  statusCard: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    marginBottom: tokens.spacing.md,
  },
  statusLabel: {
    fontSize: 12,
    color: tokens.text.tertiary,
    fontWeight: tokens.weight.bold,
    letterSpacing: 1.2,
    marginBottom: 4,
  },
  statusValue: {
    fontSize: 22,
    color: tokens.text.primary,
    fontWeight: tokens.weight.extrabold,
  },

  // Pro CTA card
  proCard: {
    backgroundColor: tokens.brand.tertiarySoft,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    marginBottom: tokens.spacing.md,
    borderWidth: 1,
    borderColor: tokens.brand.tertiary,
  },
  proTitle: {
    fontSize: 16,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    marginBottom: 6,
  },
  proBody: {
    fontSize: 14,
    color: tokens.text.secondary,
    lineHeight: 20,
    marginBottom: 12,
  },
  proCtaWrap: {
    alignSelf: "flex-start",
  },

  // Sections
  section: { marginBottom: tokens.spacing.lg },
  sectionLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    letterSpacing: 1.4,
    marginBottom: 8,
    paddingLeft: 12,
  },
  sectionInner: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.sm,
  },
  subHeading: {
    fontSize: 13,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.secondary,
    marginTop: tokens.spacing.sm,
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  actionRow: {
    paddingVertical: 4,
  },

  // Auto-cadence segment
  autoCard: {
    marginTop: tokens.spacing.sm,
    paddingHorizontal: 4,
  },
  autoLabel: {
    fontSize: 14,
    color: tokens.text.primary,
    fontWeight: tokens.weight.semibold,
    marginBottom: 6,
  },
  segment: {
    flexDirection: "row",
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderRadius: tokens.radius.full,
    padding: 4,
    gap: 4,
  },
  segmentBtn: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: tokens.radius.full,
    alignItems: "center",
  },
  segmentBtnActive: {
    backgroundColor: tokens.brand.secondary,
  },
  segmentText: {
    fontSize: 13,
    color: tokens.text.secondary,
    fontWeight: tokens.weight.semibold,
  },
  segmentTextActive: {
    color: tokens.brand.onSecondary,
  },
  autoHint: {
    fontSize: 12,
    color: tokens.text.tertiary,
    marginTop: 6,
  },

  // Cloud list
  emptyText: {
    fontSize: 13,
    color: tokens.text.tertiary,
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
  backupRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 4,
    gap: 8,
    borderBottomWidth: 1,
    borderBottomColor: tokens.border.light,
  },
  backupRowTitle: {
    fontSize: 14,
    color: tokens.text.primary,
    fontWeight: tokens.weight.semibold,
  },
  backupRowSub: {
    fontSize: 12,
    color: tokens.text.tertiary,
    marginTop: 2,
  },
  smallBtn: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: tokens.radius.sm,
    backgroundColor: tokens.bg.surfaceContainerHigh,
  },
  smallBtnText: {
    fontSize: 12,
    color: tokens.text.primary,
    fontWeight: tokens.weight.semibold,
  },
  smallBtnDanger: {
    backgroundColor: tokens.semantic.errorContainer,
  },
  smallBtnTextDanger: {
    color: tokens.semantic.error,
  },

  // Export / Import
  exportBox: {
    marginTop: tokens.spacing.sm,
    padding: 8,
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderRadius: tokens.radius.sm,
  },
  exportLabel: {
    fontSize: 12,
    color: tokens.text.secondary,
    marginBottom: 6,
  },
  exportText: {
    fontSize: 11,
    color: tokens.text.primary,
    backgroundColor: tokens.bg.surfaceContainerLowest,
    borderRadius: 6,
    padding: 8,
    minHeight: 120,
    fontFamily: tokens.font.sans,
  },
  importInput: {
    backgroundColor: tokens.bg.surfaceContainerLowest,
    borderRadius: tokens.radius.sm,
    padding: 10,
    minHeight: 100,
    fontSize: 12,
    color: tokens.text.primary,
    marginBottom: 8,
  },

  // Danger
  dangerCopy: {
    fontSize: 13,
    color: tokens.text.secondary,
    lineHeight: 19,
    marginBottom: 12,
    paddingHorizontal: 4,
  },
  dangerBtn: {
    backgroundColor: tokens.semantic.errorContainer,
    paddingVertical: 12,
    borderRadius: tokens.radius.base,
    alignItems: "center",
  },
  dangerBtnText: {
    color: tokens.semantic.error,
    fontWeight: tokens.weight.bold,
    fontSize: 15,
  },
  wipeBox: {
    gap: 8,
    paddingHorizontal: 4,
  },
  wipeLabel: {
    fontSize: 13,
    color: tokens.text.primary,
    fontWeight: tokens.weight.semibold,
  },
  wipeInput: {
    backgroundColor: tokens.bg.surfaceContainerLowest,
    borderWidth: 2,
    borderColor: tokens.semantic.error,
    borderRadius: tokens.radius.sm,
    padding: 10,
    fontSize: 16,
    color: tokens.text.primary,
    fontWeight: tokens.weight.bold,
  },
  wipeRow: {
    flexDirection: "row",
    gap: 8,
    marginTop: 8,
  },
  wipeCancel: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: tokens.radius.base,
    alignItems: "center",
    backgroundColor: tokens.bg.surfaceContainerHigh,
  },
  wipeCancelText: {
    color: tokens.text.primary,
    fontWeight: tokens.weight.semibold,
  },
  wipeConfirmBtn: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: tokens.radius.base,
    alignItems: "center",
    backgroundColor: tokens.semantic.error,
  },
  wipeConfirmBtnDisabled: {
    opacity: 0.4,
  },
  wipeConfirmText: {
    color: tokens.semantic.onError,
    fontWeight: tokens.weight.bold,
  },
});
