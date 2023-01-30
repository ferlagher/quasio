import { BackButton } from "../components/shared";
import { Manual } from "../components";
import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

type Props = {};

export const ManualScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <BackButton />
      <Manual />
    </View>
  );
};