export type Operator =
  | ""
  | "COST"
  | "SELL"
  | "MAR"
  | "IT"
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
  | "+"
  | "="
  | "×"
  | "*"
  | "G*";

export type TapeItem = {
  id: string;
  number: number;
  operator: Operator;
  note?: string;
};

export type CalcData = {
  display: string;
  operator: Operator;
  currentNumber: number;
  setOperator: React.Dispatch<React.SetStateAction<Operator>>;
  updateTape: (number: number, operator: Operator) => void;
  clearTape: () => void;
  updateDisplay: (value: string) => void;
};

export type CalcContextProps = {
  children: React.ReactNode;
};

export type CalcButtonProps = {
  label: Operator | string;
  type?: "small" | "minus" | "plus";
  onPress: (arg: Operator) => void;
};

export type ListElementProps = {
  item: TapeItem;
};
