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
    handleSum,
    handleMultiplication,
    handleTotal,
    handleGrandTotal,
    handleMemorySum,
    handleMemoryTotal,
    handlePercent,
    handleMarkUp,
    handleItems,
    handleAverage,
  } = useCalculator();

  return (
    <View style={styles.calculator}>
      <Display value={display} />
      <View style={styles.buttonsContainer}>
        <CalcButton label="IT" onPress={handleAverage} type="small" />
        <CalcButton label="♢/#" onPress={handleItems} type="small" />
        <CalcButton label="+/-" onPress={handleChangeSignPress} type="small" />
        <CalcButton label="%" onPress={handlePercent} type="small" />
        <CalcButton label="MD/MU" onPress={handleMarkUp} type="small" />

        <CalcButton
          label="CA"
          onPress={handleClearAllPress}
          onLongPress={handleClearAllLongPress}
          type="minus"
        />
        <CalcButton label="C" onPress={handleClearPress} />
        <CalcButton label="▻" onPress={handleBackspacePress} />
        <CalcButton label="M♢" onPress={handleMemoryTotal} />
        <CalcButton label="M*" onPress={handleMemoryTotal} />

        <CalcButton label="7" onPress={handleNumpadPress} />
        <CalcButton label="8" onPress={handleNumpadPress} />
        <CalcButton label="9" onPress={handleNumpadPress} />
        <CalcButton label="M+" onPress={handleMemorySum} />
        <CalcButton label="M-" onPress={handleMemorySum} />

        <CalcButton label="6" onPress={handleNumpadPress} />
        <CalcButton label="5" onPress={handleNumpadPress} />
        <CalcButton label="4" onPress={handleNumpadPress} />
        <CalcButton label="-" onPress={handleSum} type="minus" />
        <CalcButton label="÷" onPress={handleMultiplication} />

        <CalcButton label="3" onPress={handleNumpadPress} />
        <CalcButton label="2" onPress={handleNumpadPress} />
        <CalcButton label="1" onPress={handleNumpadPress} />
        <CalcButton label="⩲" onPress={handleSum} type="plus" />
        <CalcButton label="×" onPress={handleMultiplication} />

        <CalcButton label="0" onPress={handleNumpadPress} />
        <CalcButton label="00" onPress={handleNumpadPress} />
        <CalcButton label="." onPress={handleNumpadPress} />
        <CalcButton label="*" onPress={handleTotal} />
        <CalcButton label="G*" onPress={handleGrandTotal} />
      </View>
    </View>
  );
};

export default Calculator;
