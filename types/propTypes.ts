export type Operator =
  | ""
  | "COST"
  | "SELL"
  | "MAR"
  | "IT"
  | "#"
  | "♢/#"
  | "TAX+"
  | "TAX-"
  | "+/-"
  | "%"
  | "MD/MU"
  | "C"
  | "CA"
  | "▻"
  | "M♢"
  | "M*"
  | "M+"
  | "M-"
  | "-"
  | "÷"
  | "⩲"
  | "+"
  | "="
  | "×"
  | "*"
  | "G*";

export type Numpad =
  | ""
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "00"
  | ".";

export type Views = "calculator" | "manual";

export type TapeItem = {
  id: string;
  number: number;
  operator: Operator;
  note?: string;
};

export type CalcData = {
  display: string;
  operator: Operator;
  setOperator: React.Dispatch<React.SetStateAction<Operator>>;
  updateTape: (number: number, operator: Operator) => void;
  clearTape: () => void;
  updateDisplay: (value: string) => void;
};

export type CalcContextValues = {
  tape: TapeItem[];
  display: string;
  operator: Operator;
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
  setOperator: React.Dispatch<React.SetStateAction<Operator>>;
  setSum: React.Dispatch<React.SetStateAction<number[]>>;
  updateTape(operator: Operator, number: number): void;
  updateDisplay: (value: string) => void;
  clearAll: () => void;
  clearTape: () => void;
};

export type CalcContextProps = {
  children: React.ReactNode;
};

export type CalcButtonProps = {
  label: Operator | string;
  type?: "small" | "minus" | "plus";
  onPress: (args: any) => void;
};

export type ListElementProps = {
  item: TapeItem;
};

export type RootStackParamList = {
  Calculator: undefined;
  Manual: undefined;
};
