import { StyleSheet } from "react-native";
import theme from "../../../constants/themes/darkTheme";

export const styles = StyleSheet.create({
  button: {
    padding: theme.SPACE_MD,
    marginTop: theme.SPACE_SM,
    marginLeft: theme.SPACE_SM,
    borderRadius: theme.BORDER_RADIUS_SM,
    backgroundColor: theme.COLOR_BUTTON,
    ...theme.SHADOW_MD,
  },
  icon: {
    height: theme.FONT_LG,
    width: theme.FONT_LG,
  },
  rotate: {
    transform: [{ rotate: "180deg" }],
  },
});
