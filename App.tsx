import { Calculator, Tape } from "./components";
import { StyleSheet, View } from "react-native";

import theme from "./constants/themes/darkTheme";
import { useCalculator } from "./hooks";

export default function App() {
  const { tape, calcData } = useCalculator();

  return (
    <View style={styles.container}>
      <Tape content={tape} />
      <Calculator data={calcData} />
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
