import { StyleSheet } from "react-native";
import theme from "../../../constants/themes/darkTheme";

export const styles = StyleSheet.create({
  icon: {
    fontFamily: "Inter",
    fontSize: theme.FONT_MD,
    color: theme.COLOR_TEXT,
    lineHeight: theme.FONT_MD,
    width: theme.FONT_MD,
    padding: theme.SPACE_XS,
    borderRadius: theme.BORDER_RADIUS_XS,
    ...theme.SHADOW_SM,
  },
  minus: {
    backgroundColor: theme.COLOR_BUTTON_MINUS,
  },
  plus: {
    backgroundColor: theme.COLOR_BUTTON_PLUS,
  },
  default: {
    backgroundColor: theme.COLOR_BUTTON,
  },
});
