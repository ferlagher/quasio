import {
  CalcContextProps,
  CalcContextValues,
  CalcData,
  Operator,
  TapeItem,
} from "../types/propTypes";
import { createContext, useCallback, useEffect, useState } from "react";

import { formatDisplay } from "../logic";
import numeral from "numeral";

export const CalcContext = createContext<CalcContextValues>({
  tape: [],
  display: "0",
  operator: "",
  setDisplay: () => {},
  setOperator: () => {},
  setSum: () => {},
  updateTape: () => {},
  updateDisplay: () => {},
  clearAll: () => {},
  clearTape: () => {},
});

export const CalcProvider = ({ children }: CalcContextProps) => {
  const [display, setDisplay] = useState("0");
  const [tape, setTape] = useState<TapeItem[]>([]);

  const [operator, setOperator] = useState<Operator>("");
  const [sum, setSum] = useState<number[]>([]);
  const [grandSum, setGrandSum] = useState<number[]>([]);
  const [memory, setMemory] = useState<number[]>([]);

  const updateDisplay = useCallback((value: string) => {
    if (["C", "CA"].includes(value)) {
      setDisplay("0");
      return;
    }

    setDisplay(prev => {
      const prevValue = prev.includes("*") ? "0" : prev;

      if (value === "▻") return prevValue.slice(0, -1) || "0";

      if (value === ".")
        return prevValue.includes(".") ? prevValue : prevValue + value;

      return formatDisplay(prevValue, value);
    });
  }, []);

  const updateTape = useCallback((operator: Operator, number = 0) => {
    setTape(prevTape => [
      ...prevTape,
      {
        id: `${prevTape.length}`,
        number,
        operator,
      },
    ]);
    setDisplay("0");
  }, []);

  useEffect(() => {
    const number = display.includes("*") ? 0 : numeral(display).value() || 0;

    if (number && ["+", "-"].includes(operator)) {
      const value = operator === "-" ? -number : number;
      setSum(prevSum => [...prevSum, value]);
      setDisplay("0");
      updateTape(operator, number);
    }

    if (operator === "*") {
      const total = sum.reduce((acc, curr) => acc + curr, 0);
      if (total) {
        updateTape("#", sum.length);
        updateTape("*", total);
        setSum([]);
        setGrandSum(prevGrandSum => [...prevGrandSum, total]);
      }
    }

    if (operator === "G*") {
      const grandTotal = grandSum.reduce((acc, curr) => acc + curr, 0);
      if (grandTotal) {
        updateTape("#", grandSum.length);
        updateTape("*", grandTotal);
        setGrandSum([]);
        setDisplay(formatDisplay("*" + grandTotal.toString()));
      }
    }

    operator && setOperator("");
  }, [operator]);

  useEffect(() => {
    setDisplay(
      formatDisplay("*" + sum.reduce((acc, curr) => acc + curr, 0).toString())
    );
  }, [sum]);

  const clearAll = useCallback(() => {
    setSum([]);
    setGrandSum([]);
    setDisplay("0");
    updateTape("CA");
  }, []);

  const clearTape = useCallback(() => {
    clearAll();
    setTape([]);
  }, []);

  const values = {
    tape,
    display,
    operator,
    setDisplay,
    setOperator,
    setSum,
    updateTape,
    updateDisplay,
    clearAll,
    clearTape,
  };

  return <CalcContext.Provider value={values}>{children}</CalcContext.Provider>;
};
