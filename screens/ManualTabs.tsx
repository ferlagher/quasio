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
          tabBarIcon: ({ focused }) => Icons.Basic(focused),
        }}
      />
      <Tab.Screen
        name="Memory"
        component={ManualMemory}
        options={{
          tabBarIcon: ({ focused }) => Icons.Memory(focused),
        }}
      />
      <Tab.Screen
        name="Percentage"
        component={ManualPercentage}
        options={{
          tabBarIcon: ({ focused }) => Icons.Percent(focused),
        }}
      />
    </Tab.Navigator>
  );
};
