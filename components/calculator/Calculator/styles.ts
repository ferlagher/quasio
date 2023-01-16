import { StyleSheet } from "react-native";
import theme from "../../../constants/themes/darkTheme";

export const styles = StyleSheet.create({
  calculator: {
    backgroundColor: theme.COLOR_CALCULATOR,
    borderTopLeftRadius: theme.BORDER_RADIUS_MD,
    borderTopRightRadius: theme.BORDER_RADIUS_MD,
    overflow: "hidden",
  },
  buttonsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: theme.SPACE_XS,
  },
});
