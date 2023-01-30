import { ParamListBase, useNavigation } from "@react-navigation/native";
import { Pressable, Text } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { styles } from "./styles";

export const BackButton = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  return (
    <Pressable style={styles.button} onPress={() => navigation.goBack()}>
      <Text style={styles.text}>Back</Text>
    </Pressable>
  );
};
