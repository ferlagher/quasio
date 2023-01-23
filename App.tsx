import { Calculator, Manual, Menu, Tape } from "./components";
import { StyleSheet, View } from "react-native";

import { BackButton } from "./components/shared";
import { CalcProvider } from "./context/CalcContext";
import { Views } from "./types/propTypes";
import theme from "./constants/themes/darkTheme";
import { useFonts } from "expo-font";
import { useState } from "react";

export default function App() {
  const [view, setView] = useState<Views>("calculator");
  const [fontsLoaded] = useFonts({
    DSEG7: require("./assets/fonts/DSEG7Modern-BoldItalic.ttf"),
    "Courier Prime Regular": require("./assets/fonts/CourierPrime-Regular.ttf"),
    "Courier Prime Italic": require("./assets/fonts/CourierPrime-Italic.ttf"),
    Inter: require("./assets/fonts/Inter-Medium.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <CalcProvider>
      {view === "manual" ? (
        <View style={styles.container}>
          <BackButton setView={setView} />
          <Manual />
        </View>
      ) : (
        <>
          <View style={styles.container}>
            <Tape />
            <Calculator />
          </View>
          <Menu setView={setView} />
        </>
      )}
    </CalcProvider>
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
