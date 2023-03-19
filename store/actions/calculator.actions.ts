import { Numpad, Operator } from "../../types/propTypes";

import { ActionType } from "../../types/actionTypes";
import { MAX_VALUE } from "../../constants/maxVaules";

export const setAuxNumber = (num: number) => ({
  type: ActionType.SET_NUM1,
  payload: Math.min(num, MAX_VALUE),
});

export const setOperator = (operator: Operator) => ({
  type: ActionType.SET_OPERATOR,
  payload: operator,
});

export const setDisplay = (display: string) => ({
  type: ActionType.SET_DISPLAY,
  payload: display,
});

export const updateDisplay = (display: string) => ({
  type: ActionType.UPDATE_DISPLAY,
  payload: display,
});

export const updateSum = (num: number) => ({
  type: ActionType.UPDATE_SUM,
  payload: Math.min(num, MAX_VALUE),
});

export const updateGrandSum = (num: number) => ({
  type: ActionType.UPDATE_GRAND_SUM,
  payload: Math.min(num, MAX_VALUE),
});

export const updateMemory = (num: number) => ({
  type: ActionType.UPDATE_MEMORY,
  payload: Math.min(num, MAX_VALUE),
});

export const backspace = () => ({
  type: ActionType.BACKSPACE,
});

export const clearDisplay = () => ({
  type: ActionType.CLEAR_DISPLAY,
});

export const clearSum = () => ({
  type: ActionType.CLEAR_SUM,
});

export const clearGrandSum = () => ({
  type: ActionType.CLEAR_GRAND_SUM,
});

export const clearMemory = () => ({
  type: ActionType.CLEAR_MEMORY,
});

export const clearAll = () => ({
  type: ActionType.CLEAR_ALL,
});

export const setPrevButton = (button: Numpad | Operator) => ({
  type: ActionType.SET_PREV_BUTTON,
  payload: button,
});
