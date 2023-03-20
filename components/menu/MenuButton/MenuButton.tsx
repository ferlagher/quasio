import { Pressable, Text, View } from "react-native";

import { Icons } from "../../shared";
import React from "react";
import { styles } from "./styles";

type Props = {
  isRotated: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MenuButton = ({ isRotated, setIsOpen }: Props) => {
  return (
    <Pressable onPress={() => setIsOpen(prev => !prev)} style={styles.button}>
      <View style={isRotated ? { ...styles.icon, ...styles.rotate } : styles.icon}>
        {Icons.Arrow}
      </View>
    </Pressable>
  );
};
