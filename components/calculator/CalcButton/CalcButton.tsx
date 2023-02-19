import { Pressable, Text } from "react-native";

import { CalcButtonProps } from "../../../types/propTypes";
import React from "react";
import { setPrevButton } from "../../../store";
import { styles } from "./styles";
import { useDispatch } from "react-redux";

const CalcButton = ({ label, type, onPress }: CalcButtonProps) => {
  const dispatch = useDispatch();

  const handlePress = () => {
    onPress(label);
    dispatch(setPrevButton(label));
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
