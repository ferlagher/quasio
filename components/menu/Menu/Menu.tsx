import { ParamListBase, useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { Text, View } from "react-native";

import { CalcContext } from "../../../context/CalcContext";
import { MenuButton } from "../MenuButton/MenuButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { styles } from "./styles";

const Menu = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [isOpen, setIsOpen] = useState(false);
  const { clearTape } = useContext(CalcContext);
  return (
    <>
      {isOpen && <View style={styles.overlay} />}
      <View style={styles.wrapper}>
        <View
          style={
            isOpen ? { ...styles.container, ...styles.open } : styles.container
          }
        >
          <Text style={styles.text}>Save tape</Text>
          <Text style={styles.text} onPress={clearTape}>
            Clear tape
          </Text>
          <Text style={styles.text}>Tax rate</Text>
          <Text style={styles.text}>Theme</Text>
          <Text
            style={styles.text}
            onPress={() => navigation.navigate("Manual")}
          >
            Manual
          </Text>
        </View>
        <MenuButton isRotated={isOpen} setIsOpen={setIsOpen} />
      </View>
    </>
  );
};

export default Menu;
