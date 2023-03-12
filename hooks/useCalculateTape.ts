import {
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
import { TapeItem } from "../types/propTypes";
import { useDispatch } from "react-redux";

export const useCalculateTape = () => {
  const dispatch = useDispatch();

  const calculateTape = (tape: TapeItem[]) => {
    tape.forEach(item => {
      if (["+", "-"].includes(item.operator)) {
        const number = item.operator === "+" ? item.number : -item.number;
        dispatch(updateSum(number));
      }

      if (["×", "÷"].includes(item.operator)) {
        dispatch(setNum1(item.number));
        dispatch(setOperator(item.operator));
      }

      if (item.operator === "=") {
        dispatch(setNum1(0));
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
    });
  };

  return calculateTape;
};
