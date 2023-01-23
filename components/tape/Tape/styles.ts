import { StyleSheet } from "react-native";
import theme from "../../../constants/themes/darkTheme";

export const styles = StyleSheet.create({
  tape: {
    flex: 1,
    paddingHorizontal: theme.SPACE_LG,
    overflow: "scroll",
    marginTop: theme.SPACE_LG,
  },
  list: {
    marginBottom: theme.SPACE_MD,
    overflow: "visible",
  },
  listContent: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
