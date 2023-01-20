import { Operator, TapeItem } from "../types/propTypes";
import { useCallback, useEffect, useState } from "react";

import { formatDisplay } from "../utils/functions";
import numeral from "numeral";

export const useCalculator = () => {
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

  useEffect(() => {
    setCurrentNumber(numeral(display).value() || 0);
  }, [display]);

  return {
    tape,
    calcData: {
      display,
      operator,
      currentNumber,
      setTape,
      setOperator,
      updateDisplay,
    },
  };
};
