import { ManualBasic, ManualMemory, ManualPercentage } from "../components";

import { Icons } from "../components/shared";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { styles } from "../navigation/styles";
import theme from "../constants/themes/darkTheme";

const Tab = createBottomTabNavigator();

export const ManualTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: theme.COLOR_TEXT_NEGATIVE,
        tabBarInactiveTintColor: theme.COLOR_TEXT,
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      <Tab.Screen
        name="Basic"
        component={ManualBasic}
        options={{
          tabBarIcon: () => Icons.Basic,
        }}
      />
      <Tab.Screen
        name="Memory"
        component={ManualMemory}
        options={{
          tabBarIcon: () => Icons.Memory,
        }}
      />
      <Tab.Screen
        name="Percentage"
        component={ManualPercentage}
        options={{
          tabBarIcon: () => Icons.Percent,
        }}
      />
    </Tab.Navigator>
  );
};
