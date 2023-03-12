import CalcButton from "../CalcButton/CalcButton";
import Display from "../Display/Display";
import React from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { useCalculator } from "./useCalculator";

const Calculator = () => {
  const {
    display,
    handleNumpadPress,
    handleChangeSignPress,
    handleBackspacePress,
    handleClearPress,
    handleClearAllPress,
    handleClearAllLongPress,
    handleOperatorPress,
  } = useCalculator();

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
        <CalcButton label="+/-" onPress={handleChangeSignPress} type="small" />
        <CalcButton label="%" onPress={() => {}} type="small" />
        <CalcButton label="MD/MU" onPress={() => {}} type="small" />

        <CalcButton
          label="CA"
          onPress={handleClearAllPress}
          onLongPress={handleClearAllLongPress}
          type="minus"
        />
        <CalcButton label="C" onPress={handleClearPress} />
        <CalcButton label="▻" onPress={handleBackspacePress} />
        <CalcButton label="M♢" onPress={handleOperatorPress} />
        <CalcButton label="M*" onPress={handleOperatorPress} />

        <CalcButton label="7" onPress={handleNumpadPress} />
        <CalcButton label="8" onPress={handleNumpadPress} />
        <CalcButton label="9" onPress={handleNumpadPress} />
        <CalcButton label="M+" onPress={handleOperatorPress} />
        <CalcButton label="M-" onPress={handleOperatorPress} />

        <CalcButton label="6" onPress={handleNumpadPress} />
        <CalcButton label="5" onPress={handleNumpadPress} />
        <CalcButton label="4" onPress={handleNumpadPress} />
        <CalcButton label="-" onPress={handleOperatorPress} type="minus" />
        <CalcButton label="÷" onPress={handleOperatorPress} />

        <CalcButton label="3" onPress={handleNumpadPress} />
        <CalcButton label="2" onPress={handleNumpadPress} />
        <CalcButton label="1" onPress={handleNumpadPress} />
        <CalcButton label="⩲" onPress={handleOperatorPress} type="plus" />
        <CalcButton label="×" onPress={handleOperatorPress} />

        <CalcButton label="0" onPress={handleNumpadPress} />
        <CalcButton label="00" onPress={handleNumpadPress} />
        <CalcButton label="." onPress={handleNumpadPress} />
        <CalcButton label="*" onPress={handleOperatorPress} />
        <CalcButton label="G*" onPress={handleOperatorPress} />
      </View>
    </View>
  );
};

export default Calculator;
