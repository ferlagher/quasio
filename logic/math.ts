import { Operator } from "../types/propTypes";
import numeral from "numeral";

const addAndSubtract = (sum: number[], number: number) => {
  number && sum.push(number);
  return sum.reduce((acc, curr) => acc + curr, 0);
};
