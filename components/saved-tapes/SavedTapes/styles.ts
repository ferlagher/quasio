import { StyleSheet } from "react-native";
import theme from "../../../constants/themes/darkTheme";

export const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingHorizontal: theme.SPACE_LG,
    marginTop: theme.SPACE_LG,
    overflow: "scroll",
    marginBottom: theme.SPACE_MD,
  },
  listContent: {
    justifyContent: "flex-end",
  },
  pressable: {
    padding: theme.SPACE_MD,
    borderBottomWidth: 1,
    borderBottomColor: theme.COLOR_BUTTON,
  },
  text: {
    color: theme.COLOR_TEXT,
    fontSize: theme.FONT_MD,
  },
});
