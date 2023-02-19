import { Numpad, Operator, TapeItem } from "./propTypes";

export enum ActionType {
  SET_NUM1 = "SET_NUM1",
  SET_NUM2 = "SET_NUM2",
  SET_OPERATOR = "SET_OPERATOR",
  SET_DISPLAY = "SET_DISPLAY",
  UPDATE_DISPLAY = "UPDATE_DISPLAY",
  UPDATE_SUM = "UPDATE_SUM",
  UPDATE_GRAND_SUM = "UPDATE_GRAND_SUM",
  UPDATE_MEMORY = "UPDATE_MEMORY",
  BACKSPACE = "BACKSPACE",
  CLEAR_DISPLAY = "CLEAR_DISPLAY",
  CLEAR_ALL = "CLEAR_ALL",
  CLEAR_SUM = "CLEAR_SUM",
  CLEAR_GRAND_SUM = "CLEAR_GRAND_SUM",
  CLEAR_MEMORY = "CLEAR_MEMORY",
  SET_PREV_BUTTON = "SET_PREV_BUTTON",
  UPDATE_TAPE = "UPDATE_TAPE",
  CLEAR_TAPE = "CLEAR_TAPE",
}

type actionSetNumber = {
  type: ActionType.SET_NUM1 | ActionType.SET_NUM2;
  payload: number;
};

type actionSetOperator = {
  type: ActionType.SET_OPERATOR;
  payload: Operator;
};

type actionSetDisplay = {
  type: ActionType.SET_DISPLAY;
  payload: string;
};

type actionUpdateDisplay = {
  type: ActionType.UPDATE_DISPLAY;
  payload: Numpad;
};

type actionUpdateSum = {
  type: ActionType.UPDATE_SUM;
  payload: number;
};

type actionUpdateGrandSum = {
  type: ActionType.UPDATE_GRAND_SUM;
  payload: number;
};

type actionUpdateMemory = {
  type: ActionType.UPDATE_MEMORY;
  payload: number;
};

type actionBackspace = {
  type: ActionType.BACKSPACE;
};

type actionClearDisplay = {
  type: ActionType.CLEAR_DISPLAY;
};

type actionClearSum = {
  type: ActionType.CLEAR_SUM;
};

type actionClearGrandSum = {
  type: ActionType.CLEAR_GRAND_SUM;
};

type actionClearMemory = {
  type: ActionType.CLEAR_MEMORY;
};

type actionClearAll = {
  type: ActionType.CLEAR_ALL;
};

type actionSetPrevButton = {
  type: ActionType.SET_PREV_BUTTON;
  payload: Numpad | Operator;
};

type actionUpdateTape = {
  type: ActionType.UPDATE_TAPE;
  payload: Omit<TapeItem, "id">;
};

type actionClearTape = {
  type: ActionType.CLEAR_TAPE;
};

export type CalculatorAction =
  | actionSetNumber
  | actionSetOperator
  | actionSetDisplay
  | actionUpdateDisplay
  | actionUpdateSum
  | actionUpdateGrandSum
  | actionUpdateMemory
  | actionBackspace
  | actionClearDisplay
  | actionClearSum
  | actionClearGrandSum
  | actionClearMemory
  | actionClearAll
  | actionSetPrevButton;

export type TapeAction = actionUpdateTape | actionClearTape;
