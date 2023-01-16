import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import theme from "../../../constants/themes/darkTheme";

const size =
  Dimensions.get("window").width / 5 - theme.SPACE_XS * 2 - theme.SPACE_SM;

export const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    width: size,
    height: size,
    flexBasis: size,
    padding: theme.SPACE_SM,
    margin: theme.SPACE_XS,
    borderRadius: theme.BORDER_RADIUS_SM,
    backgroundColor: theme.COLOR_BUTTON,
    ...theme.SHADOW_MD,
  },
  minus: {
    backgroundColor: theme.COLOR_BUTTON_MINUS,
  },
  plus: {
    backgroundColor: theme.COLOR_BUTTON_PLUS,
  },
  small: {
    height: size / 2,
    padding: theme.SPACE_XS,
  },
  text: {
    fontSize: theme.FONT_XL,
    textAlign: "center",
    textAlignVertical: "center",
    color: theme.COLOR_TEXT,
  },
  textSmall: {
    fontSize: theme.FONT_SM,
  },
});
