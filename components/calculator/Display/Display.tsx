import { Text, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const Display = ({ value = "0" }) => {
  return (
    <View style={styles.display}>
      <Text style={styles.textOn}>{value}</Text>
      <Text style={styles.textOff}>8.8.8.8.8.8.8.8.8.8.8.8.</Text>
    </View>
  );
};

export default Display;
