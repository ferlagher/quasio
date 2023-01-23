import { StyleSheet } from "react-native";
import theme from "../../../constants/themes/darkTheme";

export const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: theme.SPACE_MD,
    margin: theme.SPACE_MD,
    borderRadius: theme.BORDER_RADIUS_SM,
    backgroundColor: theme.COLOR_BUTTON_MINUS,
    zIndex: 10,
    ...theme.SHADOW_MD,
  },
  text: {
    fontFamily: "Inter",
    fontSize: theme.FONT_MD,
    color: theme.COLOR_TEXT,
  },
});
