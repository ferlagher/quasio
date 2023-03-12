import { Operator, TapeItem } from "../types/propTypes";
import {
  clearAll,
  clearGrandSum,
  clearMemory,
  clearSum,
  setDisplay,
  setNum1,
  setOperator,
  setPrevButton,
  updateGrandSum,
  updateMemory,
  updateSum,
} from "../store";

import React from "react";
import { useDispatch } from "react-redux";

export const useCalculateTape = () => {
  const dispatch = useDispatch();

  const calculateTape = (tape: TapeItem[]) => {
    let tempNum1 = 0;
    let tempOperator: Operator = "";
    let sum = 0;
    let memory = 0;

    dispatch(setPrevButton(""));

    tape.forEach(item => {
      if (["+", "-"].includes(item.operator)) {
        const number = item.operator === "+" ? item.number : -item.number;

        sum += number;

        dispatch(updateSum(number));
        dispatch(setDisplay(sum.toString()));
      }

      if (["×", "÷"].includes(item.operator)) {
        if (tempOperator === "×") {
          tempNum1 *= item.number;
        } else if (tempOperator === "÷") {
          tempNum1 /= item.number;
        } else {
          tempNum1 = item.number;
        }

        tempOperator = item.operator;
        dispatch(setNum1(tempNum1));
        dispatch(setOperator(tempOperator));
        dispatch(setDisplay(tempNum1.toString()));
      }

      if (item.operator === "=") {
        tempNum1 = 0;
        tempOperator = "";

        dispatch(setNum1(tempNum1));
        dispatch(setOperator(tempOperator));
        dispatch(setDisplay(item.number.toString()));
      }

      if (item.operator === "*") {
        sum = 0;

        dispatch(updateGrandSum(item.number));
        dispatch(clearSum());
        dispatch(setDisplay(item.number.toString()));
      }

      if (item.operator === "G*") {
        dispatch(clearGrandSum());
        dispatch(setDisplay(item.number.toString()));
      }

      if (["M+", "M-"].includes(item.operator)) {
        const number = item.operator === "M+" ? item.number : -item.number;

        memory += number;

        dispatch(updateMemory(number));
        dispatch(setDisplay(memory.toString()));
      }

      if (item.operator === "M*") {
        memory = 0;

        dispatch(setDisplay(item.number.toString()));
        dispatch(clearMemory());
      }

      if (item.operator === "CA") {
        dispatch(clearAll());
      }
    });
  };

  return calculateTape;
};
