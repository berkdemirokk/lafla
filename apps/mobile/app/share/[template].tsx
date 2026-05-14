// Lafla — Share preview screen.
//
// Route: /share/[template]  (template ∈ level-up | weekly-wrap | milestone |
//                                       streak-day | course-complete)
//
// Loads the template-specific data, renders the full-size <ShareCard/> with
// a ref, and exposes 3 share CTAs + a "Şablonu değiştir" cycler. All sharing
// goes through lib/share.ts which is defensive about missing native modules.
//
// Add to app/_layout.tsx:
//   <Stack.Screen name="share/[template]" />

import { useEffect, useMemo, useRef, useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from "../../components/Button";
import { ShareCard } from "../../components/ShareCard";
import { tokens } from "../../theme";
import {
  ALL_TEMPLATES,
  captureAndShare,
  captureAndShareToInstagram,
  getShareCardData,
  TEMPLATE_LABELS_TR,
  type ShareCardData,
  type ShareTemplate,
} from "../../lib/share";

const VALID_TEMPLATES = new Set<string>(ALL_TEMPLATES);

function parseTemplate(raw: string | string[] | undefined): ShareTemplate {
  const v = Array.isArray(raw) ? raw[0] : raw;
  if (v && VALID_TEMPLATES.has(v)) return v as ShareTemplate;
  return "level-up";
}

export default function ShareTemplateScreen() {
  const router = useRouter();
  const params = useLocalSearchParams<{ template?: string }>();
  const [template, setTemplate] = useState<ShareTemplate>(
    parseTemplate(params.template),
  );
  const [data, setData] = useState<ShareCardData | null>(null);
  const [busy, setBusy] = useState(false);
  const cardRef = useRef<View>(null);

  useEffect(() => {
    setTemplate(parseTemplate(params.template));
  }, [params.template]);

  useEffect(() => {
    let cancelled = false;
    setData(null);
    (async () => {
      try {
        const d = await getShareCardData(template);
        if (!cancelled) setData(d);
      } catch {
        if (!cancelled) {
          // Render something — fall back to a minimal payload.
          setData({
            template,
            userName: "Lafla kullanıcısı",
          });
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [template]);

  const cycleTemplate = () => {
    const idx = ALL_TEMPLATES.indexOf(template);
    const next = ALL_TEMPLATES[(idx + 1) % ALL_TEMPLATES.length];
    setTemplate(next);
  };

  const onShareInstagram = async () => {
    if (!data || busy) return;
    setBusy(true);
    const res = await captureAndShareToInstagram(cardRef);
    setBusy(false);
    if (!res.ok && res.error) Alert.alert("Paylaşım", res.error);
    else if (res.ok && res.error) {
      // Captured but couldn't open Instagram directly — surface the message.
      Alert.alert("Paylaşım", res.error);
    }
  };

  const onShareSheet = async () => {
    if (!data || busy) return;
    setBusy(true);
    const res = await captureAndShare(cardRef, `lafla-${template}.png`);
    setBusy(false);
    if (!res.ok && res.error) Alert.alert("Paylaşım", res.error);
    else if (res.ok && res.error) Alert.alert("Paylaşım", res.error);
  };

  const onSaveOnly = async () => {
    if (!data || busy) return;
    setBusy(true);
    // We re-use captureAndShare — on platforms without an explicit "save to
    // photos" picker, the share sheet exposes a Save option. A future
    // iteration can wire `expo-media-library` for a direct save.
    const res = await captureAndShare(cardRef, `lafla-${template}.png`);
    setBusy(false);
    if (res.ok && res.uri) {
      Alert.alert(
        "Görsel hazır",
        "Paylaşım menüsünden 'Görseli Kaydet' seçeneğiyle Galeriye aktarabilirsin.",
      );
    } else if (res.error) {
      Alert.alert("Paylaşım", res.error);
    }
  };

  const label = useMemo(() => TEMPLATE_LABELS_TR[template], [template]);

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="light" />

      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>← Geri</Text>
        </Pressable>
        <Text style={styles.title}>{label}</Text>
        <Pressable onPress={cycleTemplate} style={styles.cycleBtn}>
          <Text style={styles.cycleBtnText}>Şablon ↻</Text>
        </Pressable>
      </View>

      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.cardWrap}>
          {data ? (
            <ShareCard ref={cardRef} data={data} />
          ) : (
            <View style={styles.placeholder} />
          )}
        </View>

        <View style={styles.actions}>
          <Button
            label={busy ? "Hazırlanıyor…" : "Instagram Story'e paylaş"}
            onPress={onShareInstagram}
            stacked
            loading={busy}
          />
          <View style={styles.actionGap} />
          <Button
            label="WhatsApp'a paylaş"
            onPress={onShareSheet}
            variant="secondary"
            disabled={busy}
          />
          <View style={styles.actionGap} />
          <Button
            label="Görseli kaydet"
            onPress={onSaveOnly}
            variant="ghost"
            disabled={busy}
          />
        </View>

        <Pressable onPress={cycleTemplate} style={styles.altCycle}>
          <Text style={styles.altCycleText}>Şablonu değiştir →</Text>
        </Pressable>

        <Text style={styles.fineprint}>
          Paylaşım modülleri kurulu değilse görsel oluşturulur ama paylaşım
          menüsü açılmaz. Geliştirici: `npx expo install
          react-native-view-shot expo-sharing`.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: tokens.bg.onBackground,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: tokens.spacing.md,
    paddingTop: 8,
    paddingBottom: 8,
  },
  backBtn: {
    paddingVertical: 8,
    paddingRight: 12,
  },
  backText: {
    color: tokens.text.inverseOnSurface,
    fontSize: 16,
    fontWeight: tokens.weight.semibold,
  },
  title: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: tokens.weight.black,
    letterSpacing: 0.3,
  },
  cycleBtn: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: "rgba(255,255,255,0.08)",
  },
  cycleBtnText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: tokens.weight.bold,
    letterSpacing: 0.4,
  },
  scroll: {
    paddingHorizontal: tokens.spacing.md,
    paddingBottom: 40,
    alignItems: "center",
  },
  cardWrap: {
    marginTop: 12,
    marginBottom: 24,
    // Lifting the card a touch and adding a soft shadow makes the preview
    // feel like a sticker on top of the dark surface.
    shadowColor: "#000000",
    shadowOpacity: 0.55,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 12 },
    elevation: 12,
  },
  placeholder: {
    width: 360,
    height: 640,
    borderRadius: 24,
    backgroundColor: "#1a1a1a",
  },
  actions: {
    width: "100%",
    maxWidth: 360,
    marginTop: 8,
  },
  actionGap: {
    height: 12,
  },
  altCycle: {
    marginTop: 18,
    paddingVertical: 10,
  },
  altCycleText: {
    color: tokens.brand.primary,
    fontSize: 14,
    fontWeight: tokens.weight.bold,
    letterSpacing: 0.3,
  },
  fineprint: {
    marginTop: 18,
    color: "rgba(255,255,255,0.4)",
    fontSize: 11,
    fontWeight: tokens.weight.regular,
    textAlign: "center",
    lineHeight: 16,
    maxWidth: 320,
  },
});
