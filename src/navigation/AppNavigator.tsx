import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStackParamList } from "../types/navigation";
import { ExampleScreen } from "../screens/ExampleScreen";
import { NavigationContainer } from "@react-navigation/native";
import { FirstScreen } from "../screens/FirstScreen";
import { ProfileScreen } from "../screens/ProfileScreen";


const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppNavigator() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Profile">
        {/* <Stack.Screen
            name="Example"
            component={ExampleScreen}
            // options={{ title: 'Inicio' }}
        /> */}
        {/* <Stack.Screen
            name="First"
            component={FirstScreen}
            // options={{ title: 'Inicio' }}
        /> */}
        <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            // options={{ title: 'Inicio' }}
        />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
