import { FlatList, Pressable, Text, View } from "react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { RootState, setTape } from "../../../store";
import { useDispatch, useSelector } from "react-redux";

import { API_URL } from "../../../constants/database";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { calculateTape } from "../../../logic";
import { styles } from "./styles";

const Menu = () => {
  const dispatch = useDispatch();
  const { savedTapes } = useSelector((state: RootState) => state.tape);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const handlePress = async (id: string) => {
    try {
      const res = await fetch(`${API_URL}tapes/${id}.json`);
      const data = await res.json();

      dispatch(setTape(data));
      calculateTape(data);
      navigation.navigate("Calculator");
    } catch (err) {
      alert("Error loading tape.");
    }
  };

  if (!savedTapes.length)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Nothing saved.</Text>
      </View>
    );

  return (
    <FlatList
      data={savedTapes}
      style={styles.list}
      contentContainerStyle={styles.listContent}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Pressable style={styles.pressable} onPress={() => handlePress(item.id)}>
          <Text style={styles.text}>{item.date}</Text>
        </Pressable>
      )}
      removeClippedSubviews={false}
    />
  );
};

export default Menu;
