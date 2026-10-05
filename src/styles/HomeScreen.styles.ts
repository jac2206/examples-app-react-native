import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const homeStyles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  content: { padding: 24, paddingBottom: 36 },
  eyebrow: { color: colors.primary, fontSize: 14, fontWeight: "700", marginBottom: 8 },
  title: { color: colors.text, fontSize: 32, fontWeight: "800", lineHeight: 38 },
  subtitle: {
    color: colors.muted,
    fontSize: 16,
    lineHeight: 24,
    marginTop: 10,
    marginBottom: 28,
  },
  sectionTitle: {
    color: colors.text,
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },
  card: {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    borderRadius: 18,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 18,
    marginBottom: 12,
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: colors.primarySoft,
    marginRight: 14,
  },
  cardBody: { flex: 1 },
  cardTitle: { color: colors.text, fontSize: 16, fontWeight: "700", marginBottom: 4 },
  cardDescription: { color: colors.muted, fontSize: 14, lineHeight: 20 },
  arrow: { color: colors.muted, fontSize: 25, marginLeft: 8 },
  user: { color: colors.muted, fontSize: 13, marginTop: 10 },
});
