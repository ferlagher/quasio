import { CalculatorScreen, ManualScreen } from "../pages";

import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { RootStackParamList } from "../types/propTypes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Calculator"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Calculator" component={CalculatorScreen} />
        <Stack.Screen name="Manual" component={ManualScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
