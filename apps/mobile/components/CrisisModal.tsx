import { useEffect } from "react";
import {
  Linking,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { addBreadcrumb } from "../lib/sentry";
import { getCrisisResources } from "../lib/safety-filter";
import { tokens } from "../theme";

interface CrisisModalProps {
  visible: boolean;
  onClose: () => void;
}

export function CrisisModal({ visible, onClose }: CrisisModalProps) {
  const resources = getCrisisResources();

  useEffect(() => {
    if (!visible) return;
    addBreadcrumb({
      category: "safety",
      message: "crisis_modal_opened",
    });
  }, [visible]);

  const handleCall = async (number: string) => {
    const url = `tel:${number}`;
    if (await Linking.canOpenURL(url)) {
      await Linking.openURL(url);
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <Text style={styles.eyebrow}>Destek</Text>
        <Text style={styles.title}>{resources.title}</Text>
        <Text style={styles.message}>{resources.message}</Text>

        <View style={styles.list}>
          {resources.lines.map((line) => (
            <Pressable
              key={line.number}
              style={styles.callButton}
              onPress={() => void handleCall(line.number)}
              accessibilityRole="button"
              accessibilityLabel={`${line.name} ${line.number} numarasını ara`}
            >
              <Text style={styles.callName}>{line.name}</Text>
              <Text style={styles.callNumber}>{line.number}</Text>
            </Pressable>
          ))}
        </View>

        <Pressable
          style={styles.closeButton}
          onPress={onClose}
          accessibilityRole="button"
          accessibilityLabel="Lafla'ya dön"
        >
          <Text style={styles.closeText}>Lafla'ya dön</Text>
        </Pressable>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: tokens.bg.app,
    paddingHorizontal: 24,
  },
  eyebrow: {
    color: tokens.brand.tertiary,
    fontSize: 13,
    fontWeight: tokens.weight.extrabold,
    letterSpacing: 1,
    textAlign: "center",
    textTransform: "uppercase",
  },
  title: {
    marginTop: 8,
    color: tokens.text.primary,
    fontSize: 30,
    fontWeight: tokens.weight.black,
    textAlign: "center",
  },
  message: {
    marginTop: 16,
    marginBottom: 28,
    color: tokens.text.secondary,
    fontSize: 15,
    lineHeight: 22,
    textAlign: "center",
  },
  list: {
    gap: 12,
  },
  callButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: 60,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: tokens.border.outline,
    borderRadius: tokens.radius.base,
    backgroundColor: tokens.bg.surfaceContainerHigh,
  },
  callName: {
    flex: 1,
    color: tokens.text.primary,
    fontSize: 15,
    fontWeight: tokens.weight.bold,
  },
  callNumber: {
    color: tokens.brand.primary,
    fontSize: 16,
    fontWeight: tokens.weight.extrabold,
  },
  closeButton: {
    alignItems: "center",
    marginTop: 28,
    paddingVertical: 14,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.secondary,
  },
  closeText: {
    color: tokens.text.primary,
    fontSize: 15,
    fontWeight: tokens.weight.bold,
  },
});
