import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../types/navigation";
import { useProducts } from "../hooks/useProducts";
import { apiStyles as styles } from "../styles/ApiScreen.styles";
import { colors } from "../styles/colors";

type Props = NativeStackScreenProps<AppStackParamList, "Products">;
export function ProductsScreen({ navigation }: Props) {
  const { products, loading, error } = useProducts();
  return (
    <View style={styles.safe}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Pressable style={styles.back} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={21} color={colors.text} />
          </Pressable>
          <View>
            <Text style={styles.headerTitle}>Productos</Text>
            <Text style={styles.headerSubtitle}>Datos desde DummyJSON</Text>
          </View>
          <Pressable
            style={styles.addButton}
            onPress={() => navigation.navigate("ProductEditor", {})}
          >
            <Ionicons name="add" size={22} color={colors.white} />
          </Pressable>
        </View>
        {loading ? (
          <View style={styles.center}>
            <ActivityIndicator size="large" color={colors.primary} />
          </View>
        ) : error ? (
          <View style={styles.center}>
            <Text style={styles.error}>{error}</Text>
          </View>
        ) : (
          <FlatList
            data={products}
            keyExtractor={(item) => String(item.id)}
            contentContainerStyle={styles.list}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
                style={styles.productCard}
                onPress={() =>
                  navigation.navigate("ProductEditor", { productId: item.id })
                }
              >
                <Image source={{ uri: item.thumbnail }} style={styles.productImage} />
                <View style={styles.productBody}>
                  <Text style={styles.productTitle} numberOfLines={1}>
                    {item.title}
                  </Text>
                  <Text style={styles.productDescription} numberOfLines={2}>
                    {item.description}
                  </Text>
                  <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                </View>
              </Pressable>
            )}
          />
        )}
      </View>
    </View>
  );
}
