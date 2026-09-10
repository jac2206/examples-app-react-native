import { View, Text, StyleSheet } from "react-native";
import { AppStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<AppStackParamList, "Home">;


export function HomeScreen({navigation, route}:Props) {

    const userEmail = route.params.userEmail

    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Home: {userEmail}
            </Text>

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
