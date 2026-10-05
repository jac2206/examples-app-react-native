import { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../types/navigation";
import { usePokemon } from "../hooks/usePokemon";
import { apiStyles as styles } from "../styles/ApiScreen.styles";
import { colors } from "../styles/colors";

type Props = NativeStackScreenProps<AppStackParamList, "Pokemon">;
export function PokemonScreen({ navigation }: Props) {
  const [query, setQuery] = useState("pikachu");
  const { pokemon, loading, error, search } = usePokemon();
  return (
    <ScrollView style={styles.safe} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Pressable style={styles.back} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={21} color={colors.text} />
        </Pressable>
        <View>
          <Text style={styles.headerTitle}>Pokedex</Text>
          <Text style={styles.headerSubtitle}>Datos desde PokeAPI</Text>
        </View>
      </View>
      <View style={styles.searchRow}>
        <TextInput
          style={styles.input}
          value={query}
          onChangeText={setQuery}
          placeholder="Ej. charizard"
          placeholderTextColor={colors.muted}
          autoCapitalize="none"
          onSubmitEditing={() => search(query)}
        />
        <Pressable style={styles.searchButton} onPress={() => search(query)}>
          <Text style={styles.searchText}>Buscar</Text>
        </Pressable>
      </View>
      {loading && (
        <View style={styles.center}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}
      {!!error && (
        <View style={styles.center}>
          <Text style={styles.error}>{error}</Text>
        </View>
      )}
      {pokemon && !loading && (
        <View style={styles.pokemonCard}>
          <Image
            style={styles.pokemonImage}
            source={{ uri: pokemon.sprites.front_default ?? undefined }}
          />
          <Text style={styles.pokemonName}>{pokemon.name}</Text>
          <Text style={styles.label}>
            #{String(pokemon.id).padStart(3, "0")} · Altura {pokemon.height / 10} m ·
            Peso {pokemon.weight / 10} kg
          </Text>
          <View style={styles.chips}>
            {pokemon.types.map(({ type }) => (
              <Text key={type.name} style={styles.chip}>
                {type.name}
              </Text>
            ))}
          </View>
        </View>
      )}
    </ScrollView>
  );
}
