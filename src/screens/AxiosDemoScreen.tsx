import { Pressable, ScrollView, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../types/navigation";
import { apiStyles as styles } from "../styles/ApiScreen.styles";
import { colors } from "../styles/colors";

type Props = NativeStackScreenProps<AppStackParamList, "AxiosDemo">;
export function AxiosDemoScreen({ navigation }: Props) {
  return (
    <ScrollView style={styles.safe} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Pressable style={styles.back} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={21} color={colors.text} />
        </Pressable>
        <View>
          <Text style={styles.headerTitle}>Axios</Text>
          <Text style={styles.headerSubtitle}>Dos formas de consumir APIs</Text>
        </View>
      </View>
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Axios directo</Text>
        <Text style={styles.infoText}>
          Pokedex y Productos usan axios.get directamente dentro de cada service. Es
          útil para APIs públicas sencillas.
        </Text>
      </View>
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Cliente con interceptor</Text>
        <Text style={styles.infoText}>
          El service api.ts centraliza baseURL, timeout, headers y los interceptores de
          request/response. transactionService.ts lo usa para accumulateRequest y
          redeemRequest.
        </Text>
      </View>
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>¿Dónde verlo?</Text>
        <Text style={styles.infoText}>
          Revisa src/services/pokemonService.ts, productsService.ts, api.ts y
          transactionService.ts para comparar ambos patrones.
        </Text>
      </View>
    </ScrollView>
  );
}
