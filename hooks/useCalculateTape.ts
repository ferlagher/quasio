import { Operator, TapeItem } from "../types/propTypes";
import {
  clearAll,
  clearGrandSum,
  clearMemory,
  clearSum,
  setNum1,
  setOperator,
  updateGrandSum,
  updateMemory,
  updateSum,
} from "../store";

import React from "react";
import { useDispatch } from "react-redux";

export const useCalculateTape = () => {
  const dispatch = useDispatch();

  const calculateTape = (tape: TapeItem[]) => {
    let num1 = 0;
    let operator: Operator = "";

    tape.forEach(item => {
      if (["+", "-"].includes(item.operator)) {
        const number = item.operator === "+" ? item.number : -item.number;
        dispatch(updateSum(number));
      }

      if (["×", "÷"].includes(item.operator)) {
        if (num1) {
          num1 = operator === "×" ? num1 * item.number : num1 / item.number;
        } else {
          num1 = item.number;
        }

        operator = item.operator;

        dispatch(setNum1(num1));
        dispatch(setOperator(operator));
      }

      if (item.operator === "=") {
        num1 = 0;
        operator = "";
        dispatch(setNum1(num1));
        dispatch(setOperator(operator));
      }

      if (item.operator === "*") {
        dispatch(updateGrandSum(item.number));
        dispatch(clearSum());
      }

      if (item.operator === "G*") {
        dispatch(clearGrandSum());
      }

      if (["M+", "M-"].includes(item.operator)) {
        const number = item.operator === "M+" ? item.number : -item.number;
        dispatch(updateMemory(number));
      }

      if (item.operator === "M*") {
        dispatch(clearMemory());
      }

      if (item.operator === "CA") {
        dispatch(clearAll());
      }
    });
  };

  return calculateTape;
};
