import { StyleSheet } from "react-native";
import theme from "../../../constants/themes/darkTheme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.COLOR_BACKGROUND,
    paddingTop: 10,
  },
  title: {
    color: theme.COLOR_TEXT,
    fontSize: theme.FONT_LG,
    marginBottom: theme.SPACE_LG,
  },
});
