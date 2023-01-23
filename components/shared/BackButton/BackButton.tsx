import { Pressable, Text } from "react-native";

import React from "react";
import { Views } from "../../../types/propTypes";
import { styles } from "./styles";

type Props = {
  setView: React.Dispatch<React.SetStateAction<Views>>;
};

export const BackButton = ({ setView }: Props) => {
  return (
    <Pressable style={styles.button} onPress={() => setView("calculator")}>
      <Text style={styles.text}>Back</Text>
    </Pressable>
  );
};
