import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";

import { statusBarStyleForScheme } from "../lib/theme-preference";

export function ThemedStatusBar() {
  const colorScheme = useColorScheme();
  return <StatusBar style={statusBarStyleForScheme(colorScheme)} />;
}
