import React, { useContext } from "react";

import CalcButton from "../CalcButton/CalcButton";
import { CalcContext } from "../../../context/CalcContext";
import Display from "../Display/Display";
import { Operator } from "../../../types/propTypes";
import { View } from "react-native";
import { styles } from "./styles";

const Calculator = () => {
  const { calcData } = useContext(CalcContext);
  const {
    display,
    currentNumber,
    operator,
    setOperator,
    updateTape,
    updateDisplay,
  } = calcData;

  const handlePressOperator = (operator: Operator) => {
    currentNumber && updateTape(currentNumber, operator);
  };

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

        <CalcButton label="C" onPress={updateDisplay} type="minus" />
        <CalcButton label="CA" onPress={updateDisplay} />
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
        <CalcButton label="-" onPress={handlePressOperator} type="minus" />
        <CalcButton label="÷" onPress={handlePressOperator} />

        <CalcButton label="3" onPress={updateDisplay} />
        <CalcButton label="2" onPress={updateDisplay} />
        <CalcButton label="1" onPress={updateDisplay} />
        <CalcButton label="⩲" onPress={handlePressOperator} type="plus" />
        <CalcButton label="×" onPress={handlePressOperator} />

        <CalcButton label="0" onPress={updateDisplay} />
        <CalcButton label="00" onPress={updateDisplay} />
        <CalcButton label="." onPress={updateDisplay} />
        <CalcButton label="*" onPress={() => {}} />
        <CalcButton label="G*" onPress={() => {}} />
      </View>
    </View>
  );
};

export default Calculator;
