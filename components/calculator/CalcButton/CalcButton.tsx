import { Pressable, Text } from "react-native";

import React from "react";
import { styles } from "./styles";

type Props = {
  label: string;
  type?: "small" | "minus" | "plus";
  onPress: () => void;
};

const CalcButton = ({ label, type, onPress }: Props) => {
  return (
    <Pressable
      onPress={onPress}
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
