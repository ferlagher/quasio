import { StyleSheet } from "react-native";
import theme from "../../../constants/themes/darkTheme";

export const styles = StyleSheet.create({
  listElement: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  note: {
    flex: 1,
    overflow: "scroll",
    fontFamily: "Courier Prime Italic",
    fontSize: theme.FONT_SM,
    color: theme.COLOR_TEXT,
    opacity: 0.7,
  },
  number: {
    flex: 2,
    fontFamily: "Courier Prime Regular",
    fontSize: theme.FONT_MD,
    color: theme.COLOR_TEXT,
    textAlign: "right",
  },
  negative: {
    color: theme.COLOR_TEXT_NEGATIVE,
  },
  total: {
    marginBottom: theme.SPACE_MD,
  },
});
