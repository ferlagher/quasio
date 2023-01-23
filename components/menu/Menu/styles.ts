import { StyleSheet } from "react-native";
import theme from "../../../constants/themes/darkTheme";

export const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    zIndex: 10,
  },
  container: {
    height: "100%",
    width: 0,
    backgroundColor: theme.COLOR_CALCULATOR,
  },
  text: {
    color: theme.COLOR_TEXT,
    fontFamily: "Inter",
    fontSize: theme.FONT_LG,
    marginBottom: theme.SPACE_LG,
  },
  open: {
    width: "auto",
    padding: theme.SPACE_LG,
    paddingTop: theme.SPACE_LG * 2,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: theme.COLOR_OVERLAY,
    zIndex: 9,
  },
});
