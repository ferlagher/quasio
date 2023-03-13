import { BackButton } from "../components/shared";
import React from "react";
import { SavedTapes } from "../components";
import { View } from "react-native";
import { styles } from "./styles";

export const SavedTapesScreen = () => {
  return (
    <View style={styles.container}>
      <BackButton />
      <SavedTapes />
    </View>
  );
};
