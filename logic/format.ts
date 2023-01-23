import numeral from "numeral";

export const formatDisplay = (prevValue: string, value = "") => {
  value = value.replace(/[^\d.]/g, ""); // only numbers and period
  if (prevValue === "0") return ["0", "00", ""].includes(value) ? "0" : value;

  const mark = prevValue.includes("*") ? "*" : "";

  if ((numeral(prevValue + value).value() ?? 0) >= 999999999999)
    return "999999999999" + mark;

  if ((prevValue + value).replace(".", "").length >= 12)
    return (prevValue + value).slice(0, 13) + mark;

  return prevValue + value;
};
