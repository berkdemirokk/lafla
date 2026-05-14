// Lafla — Aile Planı (Family Plan dashboard).
//
// Apple Family Sharing handles the actual subscription entitlement transfer
// to up to 5 family members. We cannot read that real list from JS — iOS
// exposes no API for it. This screen is a cosmetic dashboard: the organizer
// remembers who is on their family group, and we deep-link out to Settings
// for the system controls.
//
// To integrate:
// 1. _layout.tsx — <Stack.Screen name="family" />
// 2. settings.tsx — add "Aile Planı" row → router.push("/family") (only show if Pro)
// 3. paywall.tsx — small note "Apple Family Sharing ile 5 üyeye kadar paylaşılabilir"

import { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
  Alert,
  Linking,
  Platform,
  ActivityIndicator,
  KeyboardAvoidingView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../components/Button";
import { FamilyMemberRow } from "../components/FamilyMemberRow";
import {
  FAMILY_MAX_MEMBERS,
  type FamilyMember,
  addFamilyMemberMock,
  getFamilyMembers,
  isUserOrganizer,
  removeFamilyMember,
  setUserAsOrganizer,
} from "../lib/family-plan";
import { isPremium } from "../lib/iap";
import { tokens } from "../theme";

// iOS Settings deep link → Family Sharing pane.
// Note: `App-Prefs:` URLs are unofficial; behavior can change between iOS
// versions. We fall back to a generic settings URL if the specific pane
// can't be opened.
const FAMILY_SETTINGS_URL = "App-Prefs:FAMILY";

export default function FamilyPlanScreen() {
  const router = useRouter();
  const [hydrating, setHydrating] = useState(true);
  const [pro, setPro] = useState(false);
  const [organizer, setOrganizer] = useState(false);
  const [members, setMembers] = useState<FamilyMember[]>([]);
  const [newName, setNewName] = useState("");
  const [busy, setBusy] = useState(false);

  const refresh = useCallback(async () => {
    const [hasPro, org, list] = await Promise.all([
      isPremium(),
      isUserOrganizer(),
      getFamilyMembers(),
    ]);
    setPro(hasPro);
    setOrganizer(org);
    setMembers(list);
  }, []);

  useEffect(() => {
    (async () => {
      try {
        await refresh();
      } finally {
        setHydrating(false);
      }
    })();
  }, [refresh]);

  const handleToggleOrganizer = async () => {
    const next = !organizer;
    setOrganizer(next);
    try {
      await setUserAsOrganizer(next);
    } catch {
      // revert on failure
      setOrganizer(!next);
    }
  };

  const handleAddMember = async () => {
    const name = newName.trim();
    if (!name) {
      Alert.alert("İsim gerekli", "Eklemek için bir isim yaz.");
      return;
    }
    if (members.length >= FAMILY_MAX_MEMBERS) {
      Alert.alert(
        "Üye limiti dolu",
        `Apple Family Sharing en fazla ${FAMILY_MAX_MEMBERS} üyeye izin verir.`,
      );
      return;
    }
    setBusy(true);
    try {
      await addFamilyMemberMock(name);
      setNewName("");
      await refresh();
    } catch {
      Alert.alert("Eklenemedi", "Bir şeyler ters gitti. Tekrar dene.");
    } finally {
      setBusy(false);
    }
  };

  const handleRemoveMember = (member: FamilyMember) => {
    Alert.alert(
      "Üyeyi kaldır",
      `${member.displayName} bu listeden silinsin mi? (Apple Family Sharing'den çıkarmaz — sadece bu ekrandaki notu siler.)`,
      [
        { text: "Vazgeç", style: "cancel" },
        {
          text: "Kaldır",
          style: "destructive",
          onPress: async () => {
            await removeFamilyMember(member.id);
            await refresh();
          },
        },
      ],
    );
  };

  const handleOpenSettings = async () => {
    try {
      const supported =
        Platform.OS === "ios" ? await Linking.canOpenURL(FAMILY_SETTINGS_URL) : false;
      if (supported) {
        await Linking.openURL(FAMILY_SETTINGS_URL);
      } else {
        // Fallback — generic Settings entry; works in newer iOS that blocks
        // the App-Prefs scheme.
        await Linking.openSettings();
      }
    } catch {
      Alert.alert(
        "Açılamadı",
        "Ayarlar uygulamasından Family Sharing bölümüne elden gidebilirsin.",
      );
    }
  };

  if (hydrating) {
    return (
      <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
        <StatusBar style="dark" />
        <View style={styles.loadingWrap}>
          <ActivityIndicator color={tokens.brand.tertiary} />
        </View>
      </SafeAreaView>
    );
  }

  const atCap = members.length >= FAMILY_MAX_MEMBERS;

  return (
    <SafeAreaView style={styles.safe} edges={["top", "bottom"]}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Text style={styles.backText}>← Geri</Text>
        </Pressable>
        <Text style={styles.headerTitle}>Aile Planı</Text>
        <View style={styles.spacer} />
      </View>

      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.infoBlock}>
            <Text style={styles.infoText}>
              Lafla Pro üyeliğin Apple Family Sharing ile {FAMILY_MAX_MEMBERS}{" "}
              aile üyesine kadar paylaşılır. Bu ekran ailendeki üyeleri sadece
              sen görmen için kaydeder.
            </Text>
          </View>

          {!pro ? (
            <View style={styles.gateCard}>
              <Text style={styles.gateTitle}>Önce Pro üyeliğini al</Text>
              <Text style={styles.gateBody}>
                Family Sharing aktif bir Pro abonelik ister. Pro alırsan
                tek ödemeyle ailendeki {FAMILY_MAX_MEMBERS} kişiye kadar
                paylaşabilirsin — herkes reklamsız, sınırsız pratik yapar.
              </Text>
              <View style={styles.gateCta}>
                <Button
                  label="Pro üyeliğe göz at"
                  onPress={() => router.push("/paywall" as never)}
                />
              </View>
            </View>
          ) : (
            <>
              <View style={styles.toggleCard}>
                <View style={styles.toggleText}>
                  <Text style={styles.toggleTitle}>
                    Sen Ailenin Organizatörü müsün?
                  </Text>
                  <Text style={styles.toggleSubtitle}>
                    Organizatör, ailenin Apple ID faturasını ve aboneliklerini
                    yönetir.
                  </Text>
                </View>
                <Pressable
                  onPress={handleToggleOrganizer}
                  style={[
                    styles.switch,
                    organizer ? styles.switchOn : styles.switchOff,
                  ]}
                  accessibilityRole="switch"
                  accessibilityState={{ checked: organizer }}
                >
                  <View
                    style={[
                      styles.switchKnob,
                      organizer
                        ? styles.switchKnobOn
                        : styles.switchKnobOff,
                    ]}
                  />
                </Pressable>
              </View>

              <Text style={styles.sectionLabel}>AİLE ÜYELERİ</Text>

              {members.length === 0 ? (
                <View style={styles.emptyCard}>
                  <Text style={styles.emptyTitle}>Henüz üye yok</Text>
                  <Text style={styles.emptyBody}>
                    Aile üyelerinin adını ekle, bu ekranda Pro durumlarını
                    takip edebilesin.
                  </Text>
                </View>
              ) : (
                <View style={styles.membersList}>
                  {members.map((m) => (
                    <FamilyMemberRow
                      key={m.id}
                      name={m.displayName}
                      hasActivePro={m.hasActivePro}
                      role={m.role}
                      onRemove={() => handleRemoveMember(m)}
                    />
                  ))}
                </View>
              )}

              <View style={styles.addRow}>
                <TextInput
                  value={newName}
                  onChangeText={setNewName}
                  placeholder="Aile üyesinin adı"
                  placeholderTextColor={tokens.text.tertiary}
                  style={styles.input}
                  editable={!atCap && !busy}
                  returnKeyType="done"
                  onSubmitEditing={handleAddMember}
                  maxLength={40}
                />
                <Pressable
                  onPress={handleAddMember}
                  disabled={atCap || busy || !newName.trim()}
                  style={[
                    styles.addBtn,
                    (atCap || busy || !newName.trim()) && styles.addBtnDisabled,
                  ]}
                  accessibilityRole="button"
                  accessibilityLabel="Üye ekle"
                >
                  <Text style={styles.addBtnText}>+ Üye ekle</Text>
                </Pressable>
              </View>

              <Text style={styles.capHint}>
                {atCap
                  ? `Üye limitine ulaştın (${FAMILY_MAX_MEMBERS}/${FAMILY_MAX_MEMBERS}).`
                  : `${members.length} / ${FAMILY_MAX_MEMBERS} üye eklendi.`}
              </Text>

              <View style={styles.settingsCta}>
                <Button
                  label="Family Sharing ayarlarına git"
                  onPress={handleOpenSettings}
                  variant="secondary"
                />
                <Text style={styles.settingsHint}>
                  Gerçek aile üyesi ekleme / çıkarma iOS Ayarlar uygulamasında
                  yapılır.
                </Text>
              </View>
            </>
          )}

          <Text style={styles.footnote}>
            Not: Lafla, ailendeki kimin Pro'su aktif olduğunu doğrudan göremez.
            Aile üyesi Lafla'yı açtığında uygulaması paylaşılan üyeliği
            otomatik olarak algılar.
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  safe: { flex: 1, backgroundColor: tokens.bg.app },
  loadingWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 56,
  },
  backBtn: { width: 70 },
  backText: { color: tokens.text.secondary, fontSize: 15 },
  headerTitle: {
    fontSize: 20,
    fontWeight: tokens.weight.extrabold,
    color: tokens.text.primary,
  },
  spacer: { width: 70 },
  content: {
    padding: tokens.spacing.md,
    paddingBottom: 80,
    gap: tokens.spacing.md,
  },
  infoBlock: {
    backgroundColor: tokens.brand.tertiarySoft,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    borderWidth: 1,
    borderColor: tokens.border.light,
  },
  infoText: {
    fontSize: 14,
    color: tokens.text.primary,
    lineHeight: 21,
  },
  gateCard: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    borderWidth: 1,
    borderColor: tokens.border.light,
    gap: tokens.spacing.sm,
  },
  gateTitle: {
    fontSize: 18,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
  },
  gateBody: {
    fontSize: 14,
    color: tokens.text.secondary,
    lineHeight: 21,
  },
  gateCta: {
    marginTop: tokens.spacing.sm,
  },
  toggleCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    borderWidth: 1,
    borderColor: tokens.border.light,
    gap: tokens.spacing.sm,
  },
  toggleText: {
    flex: 1,
    gap: 4,
  },
  toggleTitle: {
    fontSize: 15,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  toggleSubtitle: {
    fontSize: 12,
    color: tokens.text.secondary,
    lineHeight: 17,
  },
  switch: {
    width: 50,
    height: 30,
    borderRadius: 15,
    padding: 3,
    justifyContent: "center",
  },
  switchOn: {
    backgroundColor: tokens.brand.tertiary,
  },
  switchOff: {
    backgroundColor: tokens.bg.surfaceContainerHighest,
  },
  switchKnob: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#ffffff",
  },
  switchKnobOn: {
    alignSelf: "flex-end",
  },
  switchKnobOff: {
    alignSelf: "flex-start",
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: tokens.weight.bold,
    color: tokens.text.tertiary,
    letterSpacing: 1.2,
    paddingHorizontal: 4,
    marginTop: tokens.spacing.sm,
  },
  emptyCard: {
    backgroundColor: tokens.bg.surfaceContainer,
    borderRadius: tokens.radius.base,
    padding: tokens.spacing.md,
    borderWidth: 1,
    borderColor: tokens.border.light,
    gap: 6,
  },
  emptyTitle: {
    fontSize: 14,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  emptyBody: {
    fontSize: 13,
    color: tokens.text.secondary,
    lineHeight: 19,
  },
  membersList: {
    gap: tokens.spacing.base,
  },
  addRow: {
    flexDirection: "row",
    gap: tokens.spacing.base,
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 44,
    borderRadius: tokens.radius.base,
    borderWidth: 1,
    borderColor: tokens.border.outlineVariant,
    paddingHorizontal: tokens.spacing.sm,
    fontSize: 15,
    color: tokens.text.primary,
    backgroundColor: tokens.bg.surfaceContainerLowest,
  },
  addBtn: {
    paddingHorizontal: tokens.spacing.md,
    height: 44,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.brand.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  addBtnDisabled: {
    opacity: 0.4,
  },
  addBtnText: {
    color: tokens.text.onPrimary,
    fontSize: 14,
    fontWeight: tokens.weight.extrabold,
  },
  capHint: {
    fontSize: 12,
    color: tokens.text.tertiary,
    paddingHorizontal: 4,
  },
  settingsCta: {
    marginTop: tokens.spacing.sm,
    gap: tokens.spacing.base,
  },
  settingsHint: {
    fontSize: 12,
    color: tokens.text.tertiary,
    textAlign: "center",
    lineHeight: 17,
    paddingHorizontal: tokens.spacing.sm,
  },
  footnote: {
    fontSize: 12,
    color: tokens.text.tertiary,
    lineHeight: 18,
    paddingHorizontal: 4,
    marginTop: tokens.spacing.sm,
  },
});
