import { StyleSheet } from "react-native";
import theme from "../../../constants/themes/darkTheme";

export const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 0,
    right: 0,
    padding: theme.SPACE_SM * 1.5,
    marginRight: theme.SPACE_MD,
    marginBottom: theme.SPACE_LG * 3,
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
