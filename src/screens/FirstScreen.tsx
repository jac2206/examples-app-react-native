import { View, Text, Button, Alert, StyleSheet, Pressable } from "react-native";

export function FirstScreen (){

    const callMessage = async () => {
        Alert.alert("Buenas noches");
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Hola Julian Arango
            </Text>
            <Pressable style={styles.button} onPress={callMessage}>
                <Text style={styles.buttonText}>
                    Saludos
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ee',
    alignItems: 'center',
    justifyContent: 'center',
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
  text: {
    color: '#fff8f8ee',
    alignItems: "center",
    fontSize: 35,
    textAlign: "center"
  }
});