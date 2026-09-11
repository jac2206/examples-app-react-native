import { View, StyleSheet, ScrollView, Pressable, Text } from "react-native";
import { ProfileCard } from "../components/ProfileCard";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../types/navigation";

type Props = NativeStackScreenProps<AppStackParamList, "Profile">;

export function ProfileScreen({navigation}: Props) {

  const goToBackHome = async() =>{
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
      >
        <ProfileCard
          name="Goku"
          profession="Guerrero Saiyajin"
          city="Planeta Tierra"
          image="https://elcomercio.pe/resizer/v2/6Y2EDIISGFGVFANEVDCR5LCG34.jpg?auth=f58b5c647a09717054d85bb8b9a6bc624bfcb14fe9c60b5246730ea6a513e2b0&width=1198&height=690&quality=75&smart=true"
        />

        <ProfileCard
          name="Naruto"
          profession="Ninja"
          city="Aldea de Konoha"
          image="https://static.wikia.nocookie.net/naruto/images/1/12/La_Promesa_de_Naruto.png/revision/latest/scale-to-width-down/732?cb=20251201131357&path-prefix=es"
        />

        <ProfileCard
          name="Luffy"
          profession="Pirata"
          city="East Blue"
          image="https://elcomercio.pe/resizer/v2/VLK3R6K3TZBODL7L7G2H7KK2LM.png?auth=3b9ee42737c1a53142f8f462821146741b364f0edddcb8835b800b3f08f57af1&width=1200&height=800&quality=75&smart=true"
        />

        <ProfileCard
          name="Edward Elric"
          profession="Alquimista"
          city="N/A"
          image="https://static.wikitide.net/deathbattlewiki/1/1f/Portrait.edwardelric.png"
        />
        <Pressable style={styles.button} onPress={goToBackHome}>
          <Text style={styles.buttonText}>
              Volver
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000ee",
  },
  content: {
    alignItems: "center",
    paddingVertical: 20,
  },
    button: {
    backgroundColor: '#fff8f8ee',
    color: '#000000ee',
    borderRadius: 12,
    minHeight: 52,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16
  },
  buttonText: { 
    color: "#000000ee", 
    fontSize: 18, 
    fontWeight: "bold", 
    textAlign: "center", 
  },
});