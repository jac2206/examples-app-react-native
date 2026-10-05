import { View, Text, Pressable, Alert } from "react-native";
import { AppStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import { InputField } from "../components/CustomInputField";
import { loginStyles as styles } from "../styles/LoginScreen.styles";

type Props = NativeStackScreenProps<AppStackParamList, "Login">;

export function LoginScreen({ navigation }: Props) {
  const goToHome = async () => {
    if (userEmail.trim() === "" || password.trim() === "") {
      return Alert.alert("campos obligatorios");
    }
    navigation.navigate("Home", { userEmail });
  };

  const [userEmail, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
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
        <Text style={styles.buttonText}>Iniciar sesion</Text>
      </Pressable>
    </View>
  );
}
