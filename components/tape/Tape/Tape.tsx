import { FlatList, View } from "react-native";
import React, { useEffect, useRef } from "react";
import { RootState, setTape } from "../../../store";
import { useDispatch, useSelector } from "react-redux";

import ListElement from "../ListElement/ListElement";
import { calculateTape } from "../../../logic";
import { fetchTape } from "../../../db";
import { styles } from "./styles";

const Tape = () => {
  const { tape } = useSelector((state: RootState) => state.tape);
  const tapeRef = useRef<FlatList>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTape()
      .then(res => {
        dispatch(setTape(res.rows._array));
        calculateTape(res.rows._array);
      })
      .catch(err => {
        console.log("🚀 ~ file: Tape.tsx:19 ~ useEffect ~ err:", err);
        alert("Error fetching tape from database");
      });
  }, []);

  return (
    <View style={styles.tape}>
      {tape.length ? (
        <FlatList
          data={tape}
          ref={tapeRef}
          style={styles.list}
          contentContainerStyle={styles.listContent}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <ListElement item={item} key={item.id} />}
          onContentSizeChange={() => tapeRef.current?.scrollToEnd({ animated: true })}
          removeClippedSubviews={false}
        />
      ) : (
        <></>
      )}
    </View>
  );
};

export default Tape;
