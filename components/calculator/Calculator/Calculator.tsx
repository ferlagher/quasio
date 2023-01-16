import CalcButton from "../CalcButton/CalcButton";
import Display from "../Display/Display";
import React from "react";
import { View } from "react-native";
import { styles } from "./styles";

type Props = {};

const Calculator = (props: Props) => {
  return (
    <View style={styles.calculator}>
      <Display currentNumber={"0"} />
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

        <CalcButton label="C" onPress={() => {}} />
        <CalcButton label="CA" onPress={() => {}} type="minus" />
        <CalcButton label="▻" onPress={() => {}} />
        <CalcButton label="M+" onPress={() => {}} />
        <CalcButton label="M-" onPress={() => {}} />

        <CalcButton label="7" onPress={() => {}} />
        <CalcButton label="8" onPress={() => {}} />
        <CalcButton label="9" onPress={() => {}} />
        <CalcButton label="M♢" onPress={() => {}} />
        <CalcButton label="M*" onPress={() => {}} />

        <CalcButton label="6" onPress={() => {}} />
        <CalcButton label="5" onPress={() => {}} />
        <CalcButton label="4" onPress={() => {}} />
        <CalcButton label="-" onPress={() => {}} type="minus" />
        <CalcButton label="÷" onPress={() => {}} />

        <CalcButton label="3" onPress={() => {}} />
        <CalcButton label="2" onPress={() => {}} />
        <CalcButton label="1" onPress={() => {}} />
        <CalcButton label="+" onPress={() => {}} type="plus" />
        <CalcButton label="×" onPress={() => {}} />

        <CalcButton label="0" onPress={() => {}} />
        <CalcButton label="00" onPress={() => {}} />
        <CalcButton label="." onPress={() => {}} />
        <CalcButton label="*" onPress={() => {}} />
        <CalcButton label="G*" onPress={() => {}} />
      </View>
    </View>
  );
};

export default Calculator;
