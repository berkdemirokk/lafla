import React, { useEffect } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  View,
  Pressable,
  Linking,
  Platform,
} from "react-native";
import * as Sentry from "@sentry/react-native";

import { tokens } from "../theme";
import { getCrisisResources } from "../lib/safety-filter";

interface CrisisModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function CrisisModal({ visible, onClose }: CrisisModalProps) {
  const resources = getCrisisResources();

  useEffect(() => {
    if (visible) {
      // Log safety incident breadcrumb to Sentry without PII
      Sentry.addBreadcrumb({
        category: "safety",
        message: "Crisis modal escalation triggered",
        level: "warning",
      });
    }
  }, [visible]);

  const handleCall = (number: string) => {
    const url = Platform.OS === "android" ? `tel:${number}` : `telprompt:${number}`;
    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(url);
        }
      })
      .catch((err) => {
        console.warn("[CrisisModal] Failed to dial:", err);
      });
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={false}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.heartIcon}>❤️</Text>
          <Text style={styles.title}>{resources.title}</Text>
          <Text style={styles.message}>{resources.message}</Text>

          <View style={styles.list}>
            {resources.lines.map((line, idx) => (
              <Pressable
                key={idx}
                style={styles.button}
                onPress={() => handleCall(line.number)}
              >
                <Text style={styles.buttonText}>{line.name}</Text>
                <Text style={styles.buttonNumber}>{line.number}</Text>
              </Pressable>
            ))}
          </View>

          <Pressable style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Lafla'ya Dön</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.bg.app,
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  content: {
    alignItems: "center",
  },
  heartIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: tokens.weight.black,
    color: tokens.text.primary,
    marginBottom: 16,
    letterSpacing: 0.5,
  },
  message: {
    fontSize: 15,
    color: tokens.text.secondary,
    textAlign: "center",
    marginBottom: 32,
    lineHeight: 22,
  },
  list: {
    width: "100%",
    gap: 16,
    marginBottom: 40,
  },
  button: {
    width: "100%",
    backgroundColor: tokens.bg.surfaceContainerHigh,
    borderColor: tokens.border.outline,
    borderWidth: 1,
    borderRadius: tokens.radius.lg,
    paddingVertical: 18,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
  buttonNumber: {
    fontSize: 16,
    fontWeight: tokens.weight.extrabold,
    color: tokens.brand.primary,
  },
  closeButton: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: tokens.radius.full,
    backgroundColor: tokens.brand.secondary || "#1e1e1e",
  },
  closeButtonText: {
    fontSize: 15,
    fontWeight: tokens.weight.bold,
    color: tokens.text.primary,
  },
});
