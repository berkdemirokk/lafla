// About screen — uygulama hakkında, yapım, teşekkürler, sosyal.

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
  Linking,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "expo-constants";
import { tokens } from "../theme";

const SOCIALS: { label: string; handle: string; url: string }[] = [
  { label: "Twitter", handle: "@lafla_app", url: "https://twitter.com/lafla_app" },
  { label: "Instagram", handle: "@lafla.app", url: "https://instagram.com/lafla.app" },
  { label: "TikTok", handle: "@lafla", url: "https://tiktok.com/@lafla" },
];

const THANKS = [
  "Expo — RN'i tek komutla ayağa kaldırıyor",
  "React Native — arayüzün altyapısı",
  "Supabase — auth, veri ve realtime",
  "OpenAI — sahne üretiminde yardım",
  "Sayısız açık kaynak paketin emekçileri",
];

export default function AboutScreen() {
  const router = useRouter();
  const version = Constants.expoConfig?.version ?? "0.1.0";

  const openUrl = (url: string) => {
    Linking.openURL(url).catch(() =>
      Alert.alert("Hata", "Bağlantı açılamadı."),
    );
  };

  const mailto = () => {
    Linking.openURL("mailto:hello@lafla.app?subject=Selam Lafla").catch(() =>
      Alert.alert("Hata", "Mail uygulaması açılamadı."),
    );
  };

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>← Geri</Text>
        </Pressable>
        <Text style={styles.title}>Hakkında</Text>
        <View style={styles.spacer} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.hero}>
          <View style={styles.iconWrap}>
            <Image
              source={require("../assets/icon.png")}
              style={styles.icon}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.appName}>Lafla</Text>
          <Text style={styles.version}>v{version}</Text>
          <Text style={styles.tagline}>Söyle gitsin.</Text>
        </View>

        <Section title="NİYE LAFLA?">
          <Text style={styles.paragraph}>
            Lafla, Türklere İngilizce öğretmek için kurulmuş Türkçe-öncelikli bir
            uygulama. Kitap okumak, kelime ezberlemek gibi değil; gerçek
            sahnelerin içine düşüp ağzından çıkanı pratik ediyorsun.
          </Text>
          <Text style={styles.paragraph}>
            Duolingo'dan farkı şu: orada herkes için aynı yol var. Lafla'da
            ilgilerin neyse, sahneler de o yönde gelir — futbolsa futbol,
            yazılımsa yazılım, sokak sohbetiyse sokak sohbeti.
          </Text>
        </Section>

        <Section title="YAPIM">
          <Text style={styles.paragraph}>
            Lafla, tek kişilik bir Türk girişimi. Geceleri ve hafta sonları
            kodlanıyor, gerçek kullanıcı geri bildirimiyle şekilleniyor.
          </Text>
          <Text style={styles.paragraph}>
            React Native + Expo ile yazıldı, arka tarafta Supabase çalışıyor.
          </Text>
        </Section>

        <Section title="TEŞEKKÜRLER">
          <View style={styles.thanksList}>
            {THANKS.map((line, i) => (
              <View key={i} style={styles.thanksRow}>
                <Text style={styles.thanksBullet}>•</Text>
                <Text style={styles.thanksText}>{line}</Text>
              </View>
            ))}
          </View>
        </Section>

        <Section title="BİZİ TAKİP ET">
          <View style={styles.pillRow}>
            {SOCIALS.map((s) => (
              <Pressable
                key={s.label}
                onPress={() => openUrl(s.url)}
                style={styles.pill}
              >
                <Text style={styles.pillLabel}>{s.label}</Text>
                <Text style={styles.pillHandle}>{s.handle}</Text>
              </Pressable>
            ))}
          </View>
        </Section>

        <Pressable style={styles.cta} onPress={mailto}>
          <Text style={styles.ctaText}>Bize Yaz</Text>
        </Pressable>

        <View style={styles.footer}>
          <Text style={styles.footerText}>© 2026 Lafla</Text>
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
  hero: {
    alignItems: "center",
    paddingVertical: tokens.spacing.md,
    marginBottom: tokens.spacing.md,
  },
  iconWrap: {
    width: 96,
    height: 96,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.brand.primary,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: tokens.brand.primary,
    shadowOpacity: 0.4,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 4 },
    marginBottom: tokens.spacing.sm,
  },
  icon: {
    width: 72,
    height: 72,
    borderRadius: tokens.radius.sm,
  },
  appName: {
    fontSize: 32,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    letterSpacing: -0.5,
  },
  version: {
    fontSize: 13,
    color: tokens.text.tertiary,
    marginTop: 2,
  },
  tagline: {
    fontSize: 14,
    color: tokens.brand.tertiary,
    fontStyle: "italic",
    marginTop: 6,
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
    padding: tokens.spacing.sm + 4,
    gap: 10,
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 22,
    color: tokens.text.primary,
  },
  thanksList: {
    gap: 8,
  },
  thanksRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  thanksBullet: {
    fontSize: 15,
    color: tokens.brand.tertiary,
    fontWeight: tokens.weight.bold,
    lineHeight: 22,
  },
  thanksText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 21,
    color: tokens.text.primary,
  },
  pillRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  pill: {
    flexGrow: 1,
    flexBasis: "30%",
    backgroundColor: tokens.bg.app,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
    borderRadius: tokens.radius.full,
    paddingVertical: 10,
    paddingHorizontal: 14,
    alignItems: "center",
  },
  pillLabel: {
    fontSize: 12,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
    letterSpacing: 0.4,
  },
  pillHandle: {
    fontSize: 11,
    color: tokens.brand.tertiary,
    marginTop: 2,
  },
  cta: {
    backgroundColor: tokens.brand.primary,
    borderRadius: tokens.radius.full,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: tokens.spacing.base,
    marginBottom: tokens.spacing.md,
    shadowColor: tokens.brand.primary,
    shadowOpacity: 0.4,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },
  ctaText: {
    fontSize: 16,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.onPrimary,
    letterSpacing: 0.3,
  },
  footer: {
    alignItems: "center",
    paddingTop: tokens.spacing.sm,
  },
  footerText: {
    fontSize: 12,
    color: tokens.text.tertiary,
  },
});
