import { FlatList, View } from "react-native";
import React, { useRef } from "react";

import ListElement from "../ListElement/ListElement";
import { RootState } from "../../../store";
import { styles } from "./styles";
import { useSelector } from "react-redux";

const Tape = () => {
  const { tape } = useSelector((state: RootState) => state.tape);
  console.log("🚀 ~ file: Tape.tsx:11 ~ Tape ~ tape:", tape);
  const tapeRef = useRef<FlatList>(null);

  return (
    <View style={styles.tape}>
      <FlatList
        data={tape}
        ref={tapeRef}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ListElement item={item} key={item.id} />}
        onContentSizeChange={() =>
          tapeRef.current?.scrollToEnd({ animated: true })
        }
        removeClippedSubviews={false}
      />
    </View>
  );
};

export default Tape;
