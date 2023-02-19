import { StyleSheet } from "react-native";
import theme from "../../../constants/themes/darkTheme";

export const styles = StyleSheet.create({
  tape: {
    flex: 1,
    paddingHorizontal: theme.SPACE_LG,
    marginTop: theme.SPACE_LG,
  },
  list: {
    overflow: "scroll",
    marginBottom: theme.SPACE_MD,
  },
  listContent: {
    justifyContent: "flex-end",
  },
});
