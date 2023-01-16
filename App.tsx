import { Calculator, Tape } from "./components";
import { StyleSheet, View } from "react-native";

import mockTapeContent from "./constants/mock/mockTapeContent.json";
import theme from "./constants/themes/darkTheme";

export default function App() {
  return (
    <View style={styles.container}>
      <Tape content={mockTapeContent} />
      <Calculator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: "100%",
    flexDirection: "column",
    backgroundColor: theme.COLOR_BACKGROUND,
    paddingTop: 10,
  },
});
