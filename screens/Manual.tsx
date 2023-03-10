import { BackButton } from "../components/shared";
import { ManualTabs } from "../navigation";
import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

export const ManualScreen = () => {
  return (
    <View style={styles.container}>
      <BackButton />
      <ManualTabs />
    </View>
  );
};
