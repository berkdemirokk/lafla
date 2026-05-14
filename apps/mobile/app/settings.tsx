// Settings screen — preferences, links, account.

import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Switch,
  Alert,
  Linking,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
import {
  disableReminders,
  enableDailyReminder,
  isNotificationsEnabled,
} from "../lib/notifications";
import { tokens } from "../theme";

const K_AUTO_SPEAK = "lafla.settings.autoSpeak";

export default function SettingsScreen() {
  const router = useRouter();
  const [autoSpeak, setAutoSpeak] = useState(true);
  const [remindersOn, setRemindersOn] = useState(false);

  useEffect(() => {
    (async () => {
      const v = await AsyncStorage.getItem(K_AUTO_SPEAK).catch(() => null);
      if (v === "false") setAutoSpeak(false);
      setRemindersOn(await isNotificationsEnabled());
    })();
  }, []);

  const setAutoSpeakValue = async (v: boolean) => {
    setAutoSpeak(v);
    await AsyncStorage.setItem(K_AUTO_SPEAK, v ? "true" : "false").catch(() => {});
  };

  const toggleReminders = async () => {
    if (remindersOn) {
      await disableReminders();
      setRemindersOn(false);
    } else {
      const ok = await enableDailyReminder(19);
      setRemindersOn(ok);
      if (!ok) {
        Alert.alert(
          "İzin reddedildi",
          "Ayarlar > Lafla > Bildirimler yolundan açabilirsin.",
        );
      }
    }
  };

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>← Geri</Text>
        </Pressable>
        <Text style={styles.title}>Ayarlar</Text>
        <View style={styles.spacer} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Section title="TERCİHLER">
          <Toggle
            label="Otomatik telaffuz"
            description="Yeni kelimelerde sesli okuma"
            value={autoSpeak}
            onValueChange={setAutoSpeakValue}
          />
          <Toggle
            label="Günlük hatırlatıcı (19:00)"
            description="Aktif günlerini sürdürmek için bildirim"
            value={remindersOn}
            onValueChange={toggleReminders}
          />
        </Section>

        <Section title="HESAP">
          <Row
            label="Kilometre Taşları"
            onPress={() => router.push("/achievements" as never)}
          />
          <Row
            label="Beceri Ağacı"
            onPress={() => router.push("/skills" as never)}
          />
          <Row
            label="İlgi alanlarımı değiştir"
            onPress={() => router.push("/onboarding" as never)}
          />
          <Row
            label="Profil"
            onPress={() => router.push("/profile" as never)}
          />
          <Row
            label="Hesabımı sil"
            onPress={() =>
              Alert.alert(
                "Hesabı sil?",
                "Tüm verilerin silinecek. Bu işlem geri alınamaz.\n\nDevam etmek için:\nhello@lafla.app adresinden silme talebi gönder. 7 gün içinde tüm verilerin kalıcı silinir.",
                [
                  { text: "Vazgeç", style: "cancel" },
                  {
                    text: "Email gönder",
                    style: "destructive",
                    onPress: () =>
                      Linking.openURL(
                        "mailto:hello@lafla.app?subject=Hesap silme talebi&body=Hesabımın ve tüm verilerimin kalıcı olarak silinmesini talep ediyorum.",
                      ).catch(() =>
                        Alert.alert("Hata", "Mail uygulaması açılamadı."),
                      ),
                  },
                ],
              )
            }
          />
        </Section>

        <Section title="DESTEK">
          <Row
            label="Bize yaz"
            onPress={() =>
              Linking.openURL("mailto:hello@lafla.app?subject=Lafla geribildirim").catch(() =>
                Alert.alert("Hata", "Mail uygulaması açılamadı."),
              )
            }
          />
          <Row
            label="App Store'da değerlendir"
            onPress={() =>
              Alert.alert(
                "Teşekkürler",
                "App Store'da yayınlandığında ratings alacağız.",
              )
            }
          />
          <Row
            label="Gizlilik Politikası"
            onPress={() =>
              Linking.openURL("https://lafla.app/privacy").catch(() =>
                Alert.alert("Hata", "Tarayıcı açılamadı."),
              )
            }
          />
          <Row
            label="Kullanım Koşulları"
            onPress={() =>
              Linking.openURL("https://lafla.app/terms").catch(() =>
                Alert.alert("Hata", "Tarayıcı açılamadı."),
              )
            }
          />
        </Section>

        <View style={styles.footer}>
          <Text style={styles.version}>
            Lafla v{Constants.expoConfig?.version ?? "0.1.0"}
          </Text>
          <Text style={styles.tagline}>Konuş, çalış.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

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

function Row({
  label,
  onPress,
}: {
  label: string;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.row} onPress={onPress}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={styles.rowChevron}>›</Text>
    </Pressable>
  );
}

function Toggle({
  label,
  description,
  value,
  onValueChange,
}: {
  label: string;
  description?: string;
  value: boolean;
  onValueChange: (v: boolean) => void;
}) {
  return (
    <View style={styles.row}>
      <View style={styles.toggleText}>
        <Text style={styles.rowLabel}>{label}</Text>
        {description && (
          <Text style={styles.rowSub}>{description}</Text>
        )}
      </View>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{
          false: tokens.bg.surfaceContainerHigh,
          true: tokens.brand.primary,
        }}
        thumbColor={value ? tokens.brand.secondary : "#fff"}
      />
    </View>
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
    padding: tokens.spacing.md,
    paddingBottom: 80,
  },
  section: {
    marginBottom: tokens.spacing.lg,
  },
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
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 14,
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: tokens.border.light,
  },
  rowLabel: {
    flex: 1,
    fontSize: 15,
    fontWeight: tokens.weight.semibold,
    color: tokens.text.primary,
  },
  rowSub: {
    fontSize: 12,
    color: tokens.text.secondary,
    marginTop: 2,
  },
  toggleText: {
    flex: 1,
  },
  rowChevron: {
    fontSize: 20,
    color: tokens.text.tertiary,
  },
  footer: {
    alignItems: "center",
    paddingTop: tokens.spacing.md,
    gap: 4,
  },
  version: {
    color: tokens.text.tertiary,
    fontSize: 13,
  },
  tagline: {
    color: tokens.text.tertiary,
    fontSize: 11,
    fontStyle: "italic",
  },
});
