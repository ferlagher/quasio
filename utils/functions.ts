import numeral from "numeral";

export const formatDisplay = (prevValue: string, value: string) => {
  if ((numeral(prevValue + value).value() ?? 0) >= 999999999999)
    return "999999999999";

  if ((prevValue + value).replace(".", "").length >= 12)
    return (prevValue + value).slice(0, 13);

  if (prevValue === "0") return value === "00" ? "0" : value;

  return prevValue + value;
};
