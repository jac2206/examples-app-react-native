import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import { AppStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { InputField } from "../components/CustomInputField";

type Props = NativeStackScreenProps<AppStackParamList, "Login">;


export function LoginScreen({navigation}: Props) {

    const goToHome = async () => {
        if (userEmail.trim() === "" || password.trim() === ""){
            return Alert.alert("campos obligatorios")
        } 
        navigation.navigate("Home", {userEmail});
    } 
    
    const [userEmail, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Login
            </Text>
            <View>
                <InputField
                    placeholder="Correo electrónico"
                    value={userEmail}
                    onChangeText={setEmail}
                />

                <InputField
                    placeholder="Contraseña"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>

            <Pressable style={styles.button} onPress={goToHome}>
                <Text style={styles.buttonText}>
                    Iniciar sesion
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
  },
  form: {
      backgroundColor: "#fff8f8ee",
      borderColor: "#fff8f8ee",
      borderRadius: 22,
      borderWidth: 1,
      padding: 20,
   }
});