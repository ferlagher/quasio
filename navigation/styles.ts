import { StyleSheet } from "react-native";
import theme from "../constants/themes/darkTheme";

export const styles = StyleSheet.create({
  tabBar: {
    alignItems: "center",
    height: 56,
    backgroundColor: theme.COLOR_CALCULATOR,
    paddingTop: theme.SPACE_SM,
    paddingBottom: theme.SPACE_SM,
    borderTopColor: theme.COLOR_CALCULATOR,
  },
  tabBarLabel: {
    fontFamily: "Inter",
  },
});
