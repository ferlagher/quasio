import { StyleSheet } from "react-native";
import theme from "../../../constants/themes/darkTheme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: theme.SPACE_LG,
    marginTop: theme.SPACE_LG,
  },
  content: {
    paddingBottom: theme.SPACE_LG * 2.5,
  },
  title: {
    fontFamily: "Inter",
    fontSize: theme.FONT_XL,
    color: theme.COLOR_TEXT,
    marginVertical: theme.SPACE_MD,
  },
  subtitle: {
    fontFamily: "Inter",
    fontSize: theme.FONT_LG,
    color: theme.COLOR_TEXT,
    marginVertical: theme.SPACE_MD,
  },
  paragraph: {
    fontFamily: "Inter",
    fontSize: theme.FONT_MD,
    color: theme.COLOR_TEXT,
    marginBottom: theme.SPACE_SM,
  },
  button: {
    position: "absolute",
    top: theme.SPACE_LG,
    left: theme.SPACE_SM,
  },
});
