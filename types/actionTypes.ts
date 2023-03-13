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
  SET_TAPE = "SET_TAPE",
  UPDATE_TAPE = "UPDATE_TAPE",
  UPDATE_NOTE = "UPDATE_NOTE",
  CLEAR_TAPE = "CLEAR_TAPE",
  SET_SAVED_TAPES = "SET_SAVED_TAPES",
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

type actionSetTape = {
  type: ActionType.SET_TAPE;
  payload: TapeItem[];
};

type actionUpdateTape = {
  type: ActionType.UPDATE_TAPE;
  payload: Omit<TapeItem, "id">;
};

type actionUpdateNote = {
  type: ActionType.UPDATE_NOTE;
  payload: { id: TapeItem["id"]; note: TapeItem["note"] };
};

type actionClearTape = {
  type: ActionType.CLEAR_TAPE;
};

type actionSetSavedTapes = {
  type: ActionType.SET_SAVED_TAPES;
  payload: TapeItem[][];
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

export type TapeAction =
  | actionSetTape
  | actionUpdateTape
  | actionUpdateNote
  | actionClearTape
  | actionSetSavedTapes;
