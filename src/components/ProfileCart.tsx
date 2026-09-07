import { View, Text, Image, StyleSheet, Pressable, Alert } from "react-native";

interface ProfileCardProps {
  name: string;
  profession: string;
  city: string;
  image: string;
}

export function ProfileCard({
  name,
  profession,
  city,
  image,
}: ProfileCardProps) {
    
  const callMessage = async () => {
    Alert.alert(
      name,
      `Profesión: ${profession}\nCiudad: ${city}`
    );
  };

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: image }}
        style={styles.image}
      />

      <Text style={styles.name}>
        {name}
      </Text>

      <Text style={styles.info}>
        {profession}
      </Text>

      <Text style={styles.info}>
        {city}
      </Text>

      <Pressable
        style={styles.button}
        onPress={callMessage}
      >
        <Text style={styles.buttonText}>
          Ver más
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "90%",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },

  name: {
    color: "#000000",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },

  info: {
    color: "#555555",
    fontSize: 16,
    marginBottom: 4,
    textAlign: "center",
  },

  button: {
    backgroundColor: "#162c68ee",
    borderRadius: 12,
    minHeight: 52,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
  },

  buttonText: {
    color: "#ffffffee",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});