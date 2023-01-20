import { FlatList, View } from "react-native";
import React, { useContext } from "react";

import { CalcContext } from "../../../context/CalcContext";
import ListElement from "../ListElement/ListElement";
import { styles } from "./styles";

const Tape = () => {
  const { tape } = useContext(CalcContext);
  return (
    <View style={styles.tape}>
      <FlatList
        removeClippedSubviews={false}
        data={tape}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ListElement item={item} />}
      />
    </View>
  );
};

export default Tape;
