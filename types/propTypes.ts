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
  | "G*"
  | "·";

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

export type TapeItem = {
  id: string;
  number: number;
  operator: Operator;
  note?: string;
};

export type CalcButtonProps = {
  label: Operator | Numpad;
  type?: "small" | "minus" | "plus";
  onPress: (args: any) => void;
  onLongPress?: (args: any) => void;
};

export type ListElementProps = {
  item: TapeItem;
};

export type RootStackParamList = {
  Calculator: undefined;
  Manual: undefined;
  QRScanner: undefined;
  QRGenerator: undefined;
};

export type DBRes = {
  insertId: any;
  rows: {
    _array: TapeItem[];
    length: number;
  };
  rowsAffected: number;
};
