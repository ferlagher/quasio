import {
  CalcContextProps,
  CalcData,
  Operator,
  TapeItem,
} from "../types/propTypes";
import { createContext, useCallback, useEffect, useState } from "react";

import { formatDisplay } from "../utils/functions";
import numeral from "numeral";

export const CalcContext = createContext({
  tape: [] as TapeItem[],
  calcData: {} as CalcData,
});

export const CalcProvider = ({ children }: CalcContextProps) => {
  const [display, setDisplay] = useState("0");
  const [tape, setTape] = useState<TapeItem[]>([]);
  const [operator, setOperator] = useState<Operator>("");
  const [currentNumber, setCurrentNumber] = useState(0);

  const updateDisplay = useCallback((value: string) => {
    if (["C", "CA"].includes(value)) {
      setDisplay("0");
      return;
    }

    if (value === "▻") {
      setDisplay(prevValue => prevValue.slice(0, -1) || "0");
      return;
    }

    if (value === ".") {
      setDisplay(prevValue =>
        prevValue.includes(".") ? prevValue : prevValue + value
      );
      return;
    }

    setDisplay(prevValue => formatDisplay(prevValue, value));
  }, []);

  const updateTape = useCallback((number: number, operator: Operator) => {
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

  const clearTape = useCallback(() => {
    setTape([]);
  }, []);

  useEffect(() => {
    setCurrentNumber(numeral(display).value() || 0);
  }, [display]);

  const values = {
    tape,
    calcData: {
      display,
      operator,
      currentNumber,
      setOperator,
      updateTape,
      clearTape,
      updateDisplay,
    },
  };

  return <CalcContext.Provider value={values}>{children}</CalcContext.Provider>;
};
