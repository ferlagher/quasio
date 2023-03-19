import {
  RootState,
  backspace,
  clearAll,
  clearDisplay,
  clearGrandSum,
  clearMemory,
  clearSum,
  clearTape,
  setAuxNumber,
  setDisplay,
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
  const { display, auxNumber, operator, sum, grandSum, memory } = useSelector(
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

  const handleClearAllLongPress = () => {
    dispatch(clearAll());
    dispatch(clearTape());
  };

  const handleSum = (currentOperator: Operator) => {
    const number = numeral(display).value();
    if (number) {
      const value = currentOperator === "-" ? -number : number;
      const op = currentOperator === "⩲" ? "+" : currentOperator;

      if (["×", "÷"].includes(operator)) {
        const result = operator === "×" ? auxNumber * number : auxNumber / number;
        dispatch(updateTape("=", number));
        dispatch(updateTape(op, result));
        dispatch(updateSum(op === "-" ? -result : result));
        dispatch(setDisplay((op === "-" ? -result : result).toString()));
        dispatch(setAuxNumber(0));
      } else {
        const total = sum.reduce((acc: number, curr: number) => acc + curr, 0);

        dispatch(updateSum(value));
        dispatch(updateTape(op, number));
        dispatch(setDisplay((total + value).toString()));
      }
    }

    dispatch(setOperator(currentOperator));
  };

  const handleMultiplication = (currentOperator: Operator) => {
    const number = numeral(display).value();

    if (number) {
      if (auxNumber) {
        const result = operator === "×" ? auxNumber * number : auxNumber / number;
        dispatch(setAuxNumber(result));
        dispatch(updateTape(currentOperator, number));
        dispatch(setDisplay(result.toString()));
      } else {
        dispatch(setAuxNumber(number));
        dispatch(updateTape(currentOperator, number));
      }
    }

    dispatch(setOperator(currentOperator));
  };

  const handleTotal = () => {
    if (sum.length) {
      const total = sum.reduce((acc: number, curr: number) => acc + curr, 0);

      dispatch(updateTape("··", sum.length));
      dispatch(updateTape("*", total));
      dispatch(updateGrandSum(total));
      dispatch(setDisplay(total.toString()));
      dispatch(clearSum());
    }

    dispatch(setOperator("*"));
  };

  const handleGrandTotal = () => {
    if (sum.length || grandSum.length) {
      const total = sum.reduce((acc: number, curr: number) => acc + curr, 0);
      const grandTotal = grandSum.reduce((acc: number, curr: number) => acc + curr, 0);

      if (sum.length) {
        handleTotal();
      }

      dispatch(updateTape("··", grandSum.length + (total ? 1 : 0)));
      dispatch(updateTape("G*", grandTotal + total));
      dispatch(setDisplay(grandTotal.toString()));
      dispatch(clearGrandSum());
    }

    dispatch(setOperator("G*"));
  };

  const handleMemorySum = (currentOperator: Operator) => {
    const number = numeral(display).value();

    if (number) {
      const result = operator === "×" ? auxNumber * number : auxNumber / number;

      dispatch(updateTape("=", number));
      dispatch(updateTape(currentOperator, result));
      dispatch(updateMemory(currentOperator === "M-" ? -result : result));
      dispatch(setDisplay((currentOperator === "M-" ? -result : result).toString()));
      dispatch(setAuxNumber(0));
    }

    dispatch(setOperator(currentOperator));
  };

  const handleMemoryTotal = (currentOperator: Operator) => {
    if (memory.length) {
      const memoryTotal = memory.reduce((acc: number, curr: number) => acc + curr, 0);

      dispatch(updateTape("··", memory.length));
      dispatch(updateTape(currentOperator, memoryTotal));
      dispatch(setDisplay(memoryTotal.toString()));

      if (currentOperator === "M*") {
        dispatch(updateTape("···"));
        dispatch(clearMemory());
      }

      dispatch(setOperator(currentOperator));
    }
  };

  const handlePercent = () => {
    const number = numeral(display).value();

    if (number && auxNumber) {
      const result = operator === "×" ? (auxNumber * number) / 100 : (auxNumber / number) * 100;

      dispatch(updateTape("%", number));
      dispatch(updateTape("·", result));
      dispatch(setDisplay(result.toString()));
      dispatch(setAuxNumber(0));
    }
  };

  const handleMarkUp = () => {
    const number = numeral(display).value();

    if (number && auxNumber) {
      const value = operator === "×" ? -number : number;
      const result = auxNumber / (1 + value / 100);

      dispatch(updateTape("%", number));
      dispatch(updateTape("···", result));
      dispatch(setDisplay(result.toString()));
      dispatch(setAuxNumber(0));
    }
  };

  const handleItems = () => {
    const total = sum.reduce((acc: number, curr: number) => acc + curr, 0);

    dispatch(updateTape("··", sum.length));
    dispatch(updateTape("♢", total));
  };

  const handleAverage = () => {
    if (sum.length) {
      const total = sum.reduce((acc: number, curr: number) => acc + curr, 0);

      dispatch(updateTape("··", sum.length));
      dispatch(updateTape("#", total / sum.length));
      dispatch(setDisplay((total / sum.length).toString()));
    }
  };

  return {
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
  };
};
