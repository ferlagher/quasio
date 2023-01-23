import { Numpad, Operator } from "../../../types/propTypes";

import React from "react";
import { Text } from "react-native";
import { styles } from "./styles";

type Props = {
  text: Operator | Numpad;
};

export const ButtonIcon = ({ text }: Props) => {
  const type = ["CA", "-"].includes(text)
    ? "minus"
    : text === "⩲"
    ? "plus"
    : "default";

  return <Text style={{ ...styles.icon, ...styles[type] }}>{text}</Text>;
};
