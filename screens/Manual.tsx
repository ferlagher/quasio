import { BackButton } from "../components/shared";
import { ManualTabs } from "./ManualTabs";
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
