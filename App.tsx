import { Calculator, Tape } from "./components";
import { StyleSheet, View } from "react-native";

import { CalcProvider } from "./context/CalcContext";
import theme from "./constants/themes/darkTheme";

export default function App() {
  return (
    <View style={styles.container}>
      <CalcProvider>
        <Tape />
        <Calculator />
      </CalcProvider>
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
