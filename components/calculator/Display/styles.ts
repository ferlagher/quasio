import { StyleSheet } from "react-native";
import theme from "../../../constants/themes/darkTheme";

export const styles = StyleSheet.create({
  display: {
    backgroundColor: theme.COLOR_DISPLAY,
    paddingHorizontal: theme.SPACE_LG,
    paddingVertical: theme.SPACE_MD,
    borderTopLeftRadius: theme.BORDER_RADIUS_MD,
    borderTopRightRadius: theme.BORDER_RADIUS_MD,
  },
  textOn: {
    fontFamily: "DSEG7",
    fontSize: theme.FONT_XL,
    textAlign: "right",
    color: theme.COLOR_DISPLAY_TEXT,
    textShadowColor: theme.COLOR_DISPLAY_TEXT,
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15,
    padding: theme.SPACE_LG,
    margin: theme.SPACE_LG * -1,
  },
  textOff: {
    width: "100%",
    fontFamily: "DSEG7",
    fontSize: theme.FONT_XL,
    textAlign: "right",
    color: theme.COLOR_DISPLAY_TEXT,
    opacity: 0.1,
    position: "absolute",
    right: 0,
    marginHorizontal: theme.SPACE_LG,
    marginVertical: theme.SPACE_MD,
  },
});
