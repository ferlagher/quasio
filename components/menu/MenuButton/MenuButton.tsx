import { Pressable, Text } from "react-native";

import React from "react";
import { styles } from "./styles";

type Props = {
  isRotated: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const MenuButton = ({ isRotated, setIsOpen }: Props) => {
  return (
    <Pressable onPress={() => setIsOpen(prev => !prev)} style={styles.button}>
      <Text
        style={isRotated ? { ...styles.icon, ...styles.rotate } : styles.icon}
      >
        ❯ {/* it'll be an icon or svg */}
      </Text>
    </Pressable>
  );
};
