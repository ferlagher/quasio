import { StyleSheet } from "react-native";
import theme from "../../../constants/themes/darkTheme";

export const styles = StyleSheet.create({
  button: {
    padding: theme.SPACE_MD,
    marginTop: theme.SPACE_LG * 1.5,
    marginLeft: theme.SPACE_SM,
    borderRadius: theme.BORDER_RADIUS_SM,
    backgroundColor: theme.COLOR_BUTTON,
    ...theme.SHADOW_MD,
  },
  icon: {
    fontFamily: "Inter",
    fontSize: theme.FONT_LG,
    lineHeight: theme.FONT_LG,
    width: theme.FONT_LG,
    textAlign: "center",
    color: theme.COLOR_TEXT,
  },
  rotate: {
    transform: [{ rotate: "180deg" }],
  },
});
