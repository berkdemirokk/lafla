import { StatusBar } from "expo-status-bar";

import { useAppTheme } from "../theme";

export function ThemedStatusBar() {
  const { scheme } = useAppTheme();
  return <StatusBar style={scheme === "dark" ? "light" : "dark"} />;
}
