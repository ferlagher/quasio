import { ParamListBase, useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";
import React, { useState } from "react";
import { clearAll, clearTape } from "../../../store";

import { MenuButton } from "../MenuButton/MenuButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { styles } from "./styles";
import { useDispatch } from "react-redux";

const Menu = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const handleClear = () => {
    dispatch(clearTape());
    dispatch(clearAll());
  };

  return (
    <>
      {isOpen && (
        <Pressable
          style={styles.overlay}
          onPress={() => setIsOpen(prev => !prev)}
        />
      )}
      <View pointerEvents="box-none" style={styles.wrapper}>
        <View
          style={
            isOpen ? { ...styles.container, ...styles.open } : styles.container
          }
        >
          <Text
            style={styles.text}
            onPress={() => navigation.navigate("QRGenerator")}
          >
            Save tape
          </Text>
          <Text style={styles.text} onPress={handleClear}>
            Clear tape
          </Text>
          <Text
            style={styles.text}
            onPress={() => navigation.navigate("QRScanner")}
          >
            Scan QR
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
