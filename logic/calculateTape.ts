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

import { insertCalculations } from "../db";
import store from "../store";

export const calculateTape = (tape: TapeItem[]) => {
  const { dispatch } = store;

  let tempNum1 = 0;
  let tempOperator: Operator = "";
  let sum = 0;
  let memory = 0;

  dispatch(setPrevButton(""));

  tape.forEach(item => {
    insertCalculations(item.number, item.operator, item.note).catch(err => {
      console.log("🚀 ~ file: tape.actions.ts:23 ~ err:", err.message);
      alert("Error saving calculation in database");
    });

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
