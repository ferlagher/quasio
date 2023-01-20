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
  | "×"
  | "*"
  | "G*";

export type TapeItem = {
  id: string;
  number: number;
  operator: Operator;
  note: string;
};

export type CalculatorProps = {
  data: {
    display: string;
    operator: Operator;
    currentNumber: number;
    setTape: React.Dispatch<React.SetStateAction<TapeItem[]>>;
    setOperator: React.Dispatch<React.SetStateAction<Operator>>;
    updateDisplay: (value: string) => void;
  };
};
