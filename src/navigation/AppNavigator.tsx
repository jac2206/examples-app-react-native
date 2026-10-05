import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamList } from "../types/navigation";
import { ExampleScreen } from "../screens/ExampleScreen";
import { NavigationContainer } from "@react-navigation/native";
import { FirstScreen } from "../screens/FirstScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { HomeScreen } from "../screens/HomeScreen";
import { PokemonScreen } from "../screens/PokemonScreen";
import { ProductsScreen } from "../screens/ProductsScreen";
import { AxiosDemoScreen } from "../screens/AxiosDemoScreen";
import { ProductEditorScreen } from "../screens/ProductEditorScreen";

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          // options={{ title: 'Inicio' }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // options={{ title: 'Inicio' }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          // options={{ title: 'Inicio' }}
        />
        <Stack.Screen name="Pokemon" component={PokemonScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="ProductEditor" component={ProductEditorScreen} />
        <Stack.Screen name="AxiosDemo" component={AxiosDemoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
