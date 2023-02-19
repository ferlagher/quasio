import { Numpad, Operator } from "../types/propTypes";

import { MAX_VALUE } from "../constants/maxVaules";
import numeral from "numeral";

export const formatDisplay = (
  value: string,
  prevValue?: string,
  prevButton?: Numpad | Operator
) => {
  if (!prevValue || !prevButton) {
    if ((numeral(value).value() ?? 0) >= MAX_VALUE) return MAX_VALUE.toString();

    if (value.replace(".", "").length >= 12) return value.slice(0, 13);

    return value;
  }

  const shouldReset = ![
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "00",
    ".",
    "+/-",
    "▻",
  ].includes(prevButton);

  if (prevValue === "0" || shouldReset) {
    if (value === ".") return "0.";

    if (["0", "00", ""].includes(value)) return "0";

    return value;
  }

  if (value === "." && prevValue.includes(".")) return prevValue;

  if ((numeral(prevValue + value).value() ?? 0) >= MAX_VALUE)
    return MAX_VALUE.toString();

  if ((prevValue + value).replace(".", "").length >= 12)
    return (prevValue + value).slice(0, 13);

  return prevValue + value;
};
