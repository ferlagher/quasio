import { GestureResponderEvent, View } from "react-native";

import CalcButton from "../CalcButton/CalcButton";
import { CalculatorProps } from "../../../types/propTypes";
import Display from "../Display/Display";
import React from "react";
import { styles } from "./styles";

const Calculator = ({ data }: CalculatorProps) => {
  const { display, currentNumber, updateDisplay } = data;
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
        <CalcButton label="-" onPress={() => {}} type="minus" />
        <CalcButton label="÷" onPress={() => {}} />

        <CalcButton label="3" onPress={updateDisplay} />
        <CalcButton label="2" onPress={updateDisplay} />
        <CalcButton label="1" onPress={updateDisplay} />
        <CalcButton label="+" onPress={() => {}} type="plus" />
        <CalcButton label="×" onPress={() => {}} />

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
