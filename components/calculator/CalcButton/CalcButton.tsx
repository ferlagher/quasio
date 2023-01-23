import { CalcButtonProps, Operator } from "../../../types/propTypes";
import { Pressable, Text } from "react-native";

import React from "react";
import { styles } from "./styles";

const CalcButton = ({ label, type, onPress }: CalcButtonProps) => {
  const handlePress = () => {
    onPress(label === "⩲" ? "+" : label);
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
