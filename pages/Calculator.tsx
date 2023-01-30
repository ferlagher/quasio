import { Calculator, Menu, Tape } from "../components";

import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

export const CalculatorScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <Tape />
        <Calculator />
      </View>
      <Menu />
    </>
  );
};
