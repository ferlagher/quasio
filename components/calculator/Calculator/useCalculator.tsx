import {
  RootState,
  backspace,
  clearAll,
  clearDisplay,
  clearGrandSum,
  clearMemory,
  clearSum,
  setDisplay,
  setNum1,
  setNum2,
  setOperator,
  updateDisplay,
  updateGrandSum,
  updateMemory,
  updateSum,
  updateTape,
} from "../../../store";
import { useDispatch, useSelector } from "react-redux";

import { Operator } from "../../../types/propTypes";
import React from "react";
import numeral from "numeral";

export const useCalculator = () => {
  const dispatch = useDispatch();
  const { display, num1, operator, sum, grandSum, memory } = useSelector(
    (state: RootState) => state.calculator
  );

  const handleNumpadPress = (value: string) => {
    dispatch(updateDisplay(value));
  };

  const handleChangeSignPress = () => {
    const number = numeral(display).multiply(-1).value() || 0;
    dispatch(setDisplay(number.toString()));
  };

  const handleBackspacePress = () => {
    dispatch(backspace());
  };

  const handleClearPress = () => {
    dispatch(clearDisplay());
  };

  const handleClearAllPress = () => {
    dispatch(clearAll());
    dispatch(updateTape("CA"));
  };

  const handleOperatorPress = (currentOperator: Operator) => {
    const number = numeral(display).value();
    const total = sum.reduce((acc, curr) => acc + curr, 0);
    const grandTotal = grandSum.reduce((acc, curr) => acc + curr, 0);
    const memoryTotal = memory.reduce((acc, curr) => acc + curr, 0);

    if (number && ["⩲", "-"].includes(currentOperator)) {
      const value = currentOperator === "-" ? -number : number;
      const op = currentOperator === "⩲" ? "+" : currentOperator;

      if (["×", "÷"].includes(operator)) {
        const result = operator === "×" ? num1 * number : num1 / number;
        dispatch(updateTape("=", number));
        dispatch(updateTape(op, result));
        dispatch(updateSum(op === "-" ? -result : result));
        dispatch(setDisplay((op === "-" ? -result : result).toString()));
        dispatch(setNum1(0));
      } else {
        dispatch(updateSum(value));
        dispatch(updateTape(op, number));
        dispatch(setDisplay((total + value).toString()));
      }
    }

    if (number && ["×", "÷"].includes(currentOperator)) {
      if (num1) {
        const result = operator === "×" ? num1 * number : num1 / number;
        dispatch(setNum1(result));
        dispatch(updateTape(currentOperator, number));
        dispatch(setDisplay(result.toString()));
      } else {
        dispatch(setNum1(number));
        dispatch(updateTape(currentOperator, number));
      }
    }

    if (currentOperator === "*" && sum.length) {
      dispatch(updateTape("#", sum.length));
      dispatch(updateTape(currentOperator, total));
      dispatch(updateGrandSum(total));
      dispatch(setDisplay(total.toString()));
      dispatch(clearSum());
    }

    if (currentOperator === "G*" && (sum.length || grandSum.length)) {
      if (sum.length) {
        handleOperatorPress("*");
      }

      dispatch(updateTape("#", grandSum.length + (total ? 1 : 0)));
      dispatch(updateTape(currentOperator, grandTotal + total));
      dispatch(setDisplay(grandTotal.toString()));
      dispatch(clearGrandSum());
    }

    if (number && ["M+", "M-"].includes(currentOperator)) {
      const result = operator === "×" ? num1 * number : num1 / number;

      dispatch(updateTape("=", number));
      dispatch(updateTape(currentOperator, result));
      dispatch(updateMemory(currentOperator === "M-" ? -result : result));
      dispatch(
        setDisplay((currentOperator === "M-" ? -result : result).toString())
      );
      dispatch(setNum1(0));
    }

    if (currentOperator === "M♢" && memory.length) {
      dispatch(updateTape("#", memory.length));
      dispatch(updateTape(currentOperator, memoryTotal));
      dispatch(setDisplay(memoryTotal.toString()));
    }

    if (currentOperator === "M*" && memory.length) {
      handleOperatorPress("M♢");
      dispatch(updateTape("·"));
      dispatch(clearMemory());
    }

    dispatch(setOperator(currentOperator));
  };

  return {
    display,
    handleNumpadPress,
    handleChangeSignPress,
    handleBackspacePress,
    handleClearPress,
    handleClearAllPress,
    handleOperatorPress,
  };
};
