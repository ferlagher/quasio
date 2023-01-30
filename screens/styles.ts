import { StyleSheet } from "react-native";
import theme from "../constants/themes/darkTheme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: "100%",
    flexDirection: "column",
    backgroundColor: theme.COLOR_BACKGROUND,
    paddingTop: 10,
  },
});
