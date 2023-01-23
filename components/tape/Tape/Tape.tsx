import { FlatList, View } from "react-native";
import React, { useContext, useRef } from "react";

import { CalcContext } from "../../../context/CalcContext";
import ListElement from "../ListElement/ListElement";
import { styles } from "./styles";

const Tape = () => {
  const { tape } = useContext(CalcContext);
  const tapeRef = useRef(null);
  return (
    <View style={styles.tape}>
      <FlatList
        data={tape}
        ref={tapeRef}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <ListElement item={item} />}
        onContentSizeChange={() =>
          tapeRef.current.scrollToEnd({ animated: true })
        }
        removeClippedSubviews={false}
      />
    </View>
  );
};

export default Tape;
