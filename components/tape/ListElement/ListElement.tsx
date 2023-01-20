import { Pressable, Text, TextInput } from "react-native";
import React, { memo, useRef, useState } from "react";

import { ListElementProps } from "../../../types/propTypes";
import numeral from "numeral";
import { styles } from "./styles";

const ListElement = ({ item }: ListElementProps) => {
  const { number, operator, note } = item;
  const formatedNumber = numeral(number).format("0,0.00");
  const [listNote, setListNote] = useState(note);
  const inputRef = useRef<TextInput>(null);
  const isNegative = number < 0 || operator === "-";

  return (
    <Pressable
      style={styles.listElement}
      onPress={() => inputRef?.current?.focus()}
    >
      <TextInput
        ref={inputRef}
        style={
          isNegative ? { ...styles.note, ...styles.negative } : styles.note
        }
        value={listNote}
        onChangeText={text => setListNote(text)}
      />
      <Text
        style={
          isNegative ? { ...styles.number, ...styles.negative } : styles.number
        }
      >
        {formatedNumber + " " + operator}
      </Text>
    </Pressable>
  );
};

export default memo(ListElement);
