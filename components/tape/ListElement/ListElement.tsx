import { Pressable, Text, TextInput } from "react-native";
import React, { memo, useEffect, useRef, useState } from "react";

import { ListElementProps } from "../../../types/propTypes";
import numeral from "numeral";
import { styles } from "./styles";
import { updateNote } from "../../../store";
import { useDispatch } from "react-redux";

const ListElement = ({ item }: ListElementProps) => {
  const { id, number, operator, note } = item;
  const formatedNumber = numeral(number).format("0,0.00");
  const [listNote, setListNote] = useState(note);
  const inputRef = useRef<TextInput>(null);
  const isNegative = number < 0 || ["-", "M-"].includes(operator);
  const isSeparator = ["CA", "·", "#"].includes(operator);
  const isTotal = ["*", "="].includes(operator);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateNote(id, listNote));
  }, [listNote]);

  return (
    <Pressable
      style={
        isTotal
          ? { ...styles.listElement, ...styles.total }
          : styles.listElement
      }
      onPress={() => inputRef?.current?.focus()}
    >
      {!isSeparator && (
        <TextInput
          ref={inputRef}
          style={
            isNegative ? { ...styles.note, ...styles.negative } : styles.note
          }
          value={listNote}
          onChangeText={text => setListNote(text)}
        />
      )}
      <Text
        style={
          isNegative ? { ...styles.number, ...styles.negative } : styles.number
        }
      >
        {operator === "CA"
          ? "····0····   "
          : operator === "·"
          ? "···················"
          : operator === "#"
          ? numeral(number).format("000").padEnd(16, "·") + "   "
          : formatedNumber + " " + operator.padStart(2, " ")}
      </Text>
    </Pressable>
  );
};

export default memo(ListElement);
