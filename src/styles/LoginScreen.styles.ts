import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  text: { color: colors.text, fontSize: 34, fontWeight: "800", marginBottom: 28 },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    minHeight: 52,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },
  buttonText: { color: colors.white, fontSize: 16, fontWeight: "700" },
});
