import { ParamListBase, useNavigation } from "@react-navigation/native";
import { Pressable, Text, View } from "react-native";
import React, { useCallback, useState } from "react";
import { RootState, clearAll, clearTape, loadTape, saveTape, setSavedTapes } from "../../../store";
import { useDispatch, useSelector } from "react-redux";

import { MenuButton } from "../MenuButton/MenuButton";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { styles } from "./styles";

const Menu = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const dispatch = useDispatch();
  const { tape } = useSelector((state: RootState) => state.tape);
  const [isOpen, setIsOpen] = useState(false);

  const handleClear = () => {
    dispatch(clearTape());
    dispatch(clearAll());
  };

  const handleSave = useCallback(() => {
    dispatch(saveTape(tape));
  }, [tape]);

  const handleLoad = useCallback(() => {
    dispatch(setSavedTapes());
    navigation.navigate("SavedTapes");
  }, [tape]);

  const handleGenerateQR = () => {
    navigation.navigate("QRGenerator");
  };

  const handleScanQR = () => {
    navigation.navigate("QRScanner");
  };

  const handleManual = () => {
    navigation.navigate("Manual");
  };

  return (
    <>
      {isOpen && <Pressable style={styles.overlay} onPress={() => setIsOpen(prev => !prev)} />}
      <View pointerEvents="box-none" style={styles.wrapper}>
        <View style={isOpen ? { ...styles.container, ...styles.open } : styles.container}>
          <Text style={styles.text} onPress={handleClear}>
            Clear tape
          </Text>
          <Text style={styles.text} onPress={handleSave}>
            Save tape
          </Text>
          <Text style={styles.text} onPress={handleLoad}>
            Load tape
          </Text>
          <Text style={styles.text} onPress={handleGenerateQR}>
            Generate QR
          </Text>
          <Text style={styles.text} onPress={handleScanQR}>
            Scan QR
          </Text>
          <Text style={styles.text} onPress={handleManual}>
            Manual
          </Text>
        </View>
        <MenuButton isRotated={isOpen} setIsOpen={setIsOpen} />
      </View>
    </>
  );
};

export default Menu;
