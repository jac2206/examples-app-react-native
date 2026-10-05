import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const profileStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { alignItems: "center", paddingVertical: 20 },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    minHeight: 52,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
    marginBottom: 20,
  },
  buttonText: { color: colors.white, fontSize: 16, fontWeight: "700" },
});
