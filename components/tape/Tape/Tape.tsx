import { FlatList, View } from "react-native";
import React, { useEffect, useState } from "react";

import ListElement from "../ListElement/ListElement";
import { styles } from "./styles";

type Props = {
  content: {
    id: string;
    number: number;
    operator: string;
    note?: string;
  }[];
};

const Tape = ({ content }: Props) => {
  return (
    <View style={styles.tape}>
      <FlatList
        removeClippedSubviews={false}
        data={content}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ListElement
            number={item.number}
            operator={item.operator}
            note={item?.note}
          />
        )}
      />
    </View>
  );
};

export default Tape;
