import { Pressable, Text } from "react-native";

import React from "react";
import { styles } from "./styles";

type Props = {
  label: string;
  type?: "small" | "minus" | "plus";
  onPress: (arg: string) => void;
};

const CalcButton = ({ label, type, onPress }: Props) => {
  const handlePress = () => {
    onPress(label);
  };
  return (
    <Pressable
      onPress={handlePress}
      style={type ? { ...styles.button, ...styles[type] } : styles.button}
    >
      <Text
        style={
          type === "small"
            ? { ...styles.text, ...styles.textSmall }
            : styles.text
        }
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default CalcButton;
