import React, { useContext } from "react";

import CalcButton from "../CalcButton/CalcButton";
import { CalcContext } from "../../../context/CalcContext";
import Display from "../Display/Display";
import { View } from "react-native";
import { styles } from "./styles";

const Calculator = () => {
  const {
    display,
    operator,
    setOperator,
    setSum,
    updateTape,
    updateDisplay,
    clearAll,
  } = useContext(CalcContext);

  return (
    <View style={styles.calculator}>
      <Display value={display} />
      <View style={styles.buttonsContainer}>
        <CalcButton label="COST" onPress={() => {}} type="small" />
        <CalcButton label="SELL" onPress={() => {}} type="small" />
        <CalcButton label="MAR" onPress={() => {}} type="small" />
        <CalcButton label="IT" onPress={() => {}} type="small" />
        <CalcButton label="♢/#" onPress={() => {}} type="small" />

        <CalcButton label="TAX+" onPress={() => {}} type="small" />
        <CalcButton label="TAX-" onPress={() => {}} type="small" />
        <CalcButton label="+/-" onPress={() => {}} type="small" />
        <CalcButton label="%" onPress={() => {}} type="small" />
        <CalcButton label="MD/MU" onPress={() => {}} type="small" />

        <CalcButton label="CA" onPress={clearAll} type="minus" />
        <CalcButton label="C" onPress={updateDisplay} />
        <CalcButton label="▻" onPress={updateDisplay} />
        <CalcButton label="M♢" onPress={() => {}} />
        <CalcButton label="M*" onPress={() => {}} />

        <CalcButton label="7" onPress={updateDisplay} />
        <CalcButton label="8" onPress={updateDisplay} />
        <CalcButton label="9" onPress={updateDisplay} />
        <CalcButton label="M+" onPress={() => {}} />
        <CalcButton label="M-" onPress={() => {}} />

        <CalcButton label="6" onPress={updateDisplay} />
        <CalcButton label="5" onPress={updateDisplay} />
        <CalcButton label="4" onPress={updateDisplay} />
        <CalcButton label="-" onPress={setOperator} type="minus" />
        <CalcButton label="÷" onPress={setOperator} />

        <CalcButton label="3" onPress={updateDisplay} />
        <CalcButton label="2" onPress={updateDisplay} />
        <CalcButton label="1" onPress={updateDisplay} />
        <CalcButton label="⩲" onPress={setOperator} type="plus" />
        <CalcButton label="×" onPress={setOperator} />

        <CalcButton label="0" onPress={updateDisplay} />
        <CalcButton label="00" onPress={updateDisplay} />
        <CalcButton label="." onPress={updateDisplay} />
        <CalcButton label="*" onPress={setOperator} />
        <CalcButton label="G*" onPress={setOperator} />
      </View>
    </View>
  );
};

export default Calculator;
