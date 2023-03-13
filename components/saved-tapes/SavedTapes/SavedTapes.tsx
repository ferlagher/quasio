import { FlatList, Pressable, Text } from "react-native";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { RootState, setTape } from "../../../store";
import { useDispatch, useSelector } from "react-redux";

import { API_URL } from "../../../constants/database";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { styles } from "./styles";

const Menu = () => {
  const dispatch = useDispatch();
  const { savedTapes } = useSelector((state: RootState) => state.tape);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  console.log("🚀 ~ file: SavedTapes.tsx:11 ~ Menu ~ savedTapes:", savedTapes);

  const handlePress = async (id: string) => {
    try {
      const res = await fetch(`${API_URL}tapes/${id}.json`);
      const data = await res.json();
      console.log("🚀 ~ file: SavedTapes.tsx:21 ~ handlePress ~ data:", data);

      dispatch(setTape(data));
      navigation.navigate("Calculator");
    } catch (err) {
      console.log("🚀 ~ file: SavedTapes.tsx:26 ~ Menu ~ err", err);
      alert("Error loading tape.");
    }
  };

  return (
    <FlatList
      data={savedTapes}
      style={styles.list}
      contentContainerStyle={styles.listContent}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Pressable
          style={styles.pressable}
          onPress={() => handlePress(item.id)}
        >
          <Text style={styles.text}>{item.date}</Text>
        </Pressable>
      )}
      removeClippedSubviews={false}
    />
  );
};

export default Menu;
