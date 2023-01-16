import { Text, View } from "react-native";

import React from "react";
import { styles } from "./styles";
import { useFonts } from "expo-font";

type Props = {
  currentNumber: string;
};

const Display = ({ currentNumber = "0" }: Props) => {
  const [fontsLoaded] = useFonts({
    DSEG7: require("../../../assets/fonts/DSEG7Modern-BoldItalic.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.display}>
      <Text style={styles.textOn}>{currentNumber}</Text>
      <Text style={styles.textOff}>8.8.8.8.8.8.8.8.8.8.8.8.</Text>
    </View>
  );
};

export default Display;
