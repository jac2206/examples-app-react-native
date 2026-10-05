import { View, Text, Pressable, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AppStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { homeStyles as styles } from "../styles/HomeScreen.styles";

type Props = NativeStackScreenProps<AppStackParamList, "Home">;

export function HomeScreen({ navigation, route }: Props) {
  const userEmail = route.params.userEmail;

  const options = [
    {
      title: "Pokedex",
      description: "Busca un Pokémon y conoce sus datos básicos.",
      icon: "game-controller-outline" as const,
      route: "Pokemon" as const,
    },
    {
      title: "Productos",
      description: "Consulta productos desde DummyJSON.",
      icon: "bag-handle-outline" as const,
      route: "Products" as const,
    },
    {
      title: "Perfiles",
      description: "Ejemplo de componentes y navegación local.",
      icon: "people-outline" as const,
      route: "Profile" as const,
    },
    {
      title: "Axios e interceptor",
      description: "Cómo centralizar configuración y errores HTTP.",
      icon: "git-network-outline" as const,
      route: "AxiosDemo" as const,
    },
  ];

  return (
    <ScrollView style={styles.safe} contentContainerStyle={styles.content}>
      <Text style={styles.eyebrow}>EJEMPLOS DE REACT NATIVE</Text>
      <Text style={styles.title}>¿Qué quieres explorar?</Text>
      <Text style={styles.subtitle}>
        Un espacio para practicar navegación, componentes y consumo de APIs.
      </Text>
      <Text style={styles.sectionTitle}>Funcionalidades</Text>
      {options.map((option) => (
        <Pressable
          key={option.title}
          style={styles.card}
          onPress={() => navigation.navigate(option.route as never)}
        >
          <View style={styles.icon}>
            <Ionicons name={option.icon} size={24} color="#2563EB" />
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.cardTitle}>{option.title}</Text>
            <Text style={styles.cardDescription}>{option.description}</Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </Pressable>
      ))}
      <Text style={styles.user}>Sesión iniciada como {userEmail}</Text>
    </ScrollView>
  );
}
