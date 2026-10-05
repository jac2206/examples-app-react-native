import {
  ActivityIndicator,
  Alert,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../types/navigation";
import { useProductEditor } from "../hooks/useProductEditor";
import { apiStyles as styles } from "../styles/ApiScreen.styles";
import { colors } from "../styles/colors";

type Props = NativeStackScreenProps<AppStackParamList, "ProductEditor">;
export function ProductEditorScreen({ navigation, route }: Props) {
  const productId = route.params.productId;
  const { form, loading, saving, isEditing, updateField, save } =
    useProductEditor(productId);
  const submit = async () => {
    if (!form.title.trim() || !form.description.trim() || form.price <= 0)
      return Alert.alert(
        "Campos incompletos",
        "Completa título, descripción y un precio mayor que cero.",
      );
    try {
      const result = await save();
      Alert.alert(
        isEditing ? "Producto actualizado" : "Producto creado",
        `ID recibido: ${result.id}`,
        [{ text: "Aceptar", onPress: () => navigation.goBack() }],
      );
    } catch {
      Alert.alert("Error", "No pudimos guardar el producto.");
    }
  };
  if (loading)
    return (
      <View style={[styles.safe, styles.center]}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  return (
    <ScrollView
      style={styles.safe}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.header}>
        <Pressable style={styles.back} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={21} color={colors.text} />
        </Pressable>
        <View>
          <Text style={styles.headerTitle}>
            {isEditing ? "Editar producto" : "Nuevo producto"}
          </Text>
          <Text style={styles.headerSubtitle}>
            {isEditing ? `Producto #${productId}` : "POST en DummyJSON"}
          </Text>
        </View>
      </View>
      <Text style={styles.formLabel}>Título</Text>
      <TextInput
        style={styles.formInput}
        value={form.title}
        onChangeText={(value) => updateField("title", value)}
        placeholder="Ej. Laptop"
        placeholderTextColor={colors.muted}
      />
      <Text style={styles.formLabel}>Descripción</Text>
      <TextInput
        style={[styles.formInput, styles.formTextarea]}
        value={form.description}
        onChangeText={(value) => updateField("description", value)}
        placeholder="Describe el producto"
        placeholderTextColor={colors.muted}
        multiline
      />
      <Text style={styles.formLabel}>Precio</Text>
      <TextInput
        style={styles.formInput}
        value={String(form.price || "")}
        onChangeText={(value) => updateField("price", value)}
        placeholder="0.00"
        placeholderTextColor={colors.muted}
        keyboardType="decimal-pad"
      />
      <Pressable style={styles.saveButton} onPress={submit} disabled={saving}>
        {saving ? (
          <ActivityIndicator color={colors.white} />
        ) : (
          <Text style={styles.saveText}>
            {isEditing ? "Actualizar producto" : "Crear producto"}
          </Text>
        )}
      </Pressable>
    </ScrollView>
  );
}
