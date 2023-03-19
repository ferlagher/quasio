import { ActionType, CalculatorAction } from "../../types/actionTypes";
import { Numpad, Operator } from "../../types/propTypes";

import { AnyAction } from "redux";
import { formatDisplay } from "../../logic";

const initialState = {
  auxNumber: 0,
  operator: "" as Operator,
  display: "0",
  sum: [] as number[],
  grandSum: [] as number[],
  memory: [] as number[],
  prevButton: "" as Numpad | Operator,
};

const CalculatorReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionType.SET_NUM1:
      return {
        ...state,
        auxNumber: action.payload,
      };
    case ActionType.SET_OPERATOR:
      return {
        ...state,
        operator: action.payload,
      };
    case ActionType.SET_DISPLAY:
      return {
        ...state,
        display: formatDisplay(action.payload),
      };
    case ActionType.UPDATE_DISPLAY:
      return {
        ...state,
        display: formatDisplay(action.payload, state.display, state.prevButton),
      };
    case ActionType.UPDATE_SUM:
      return {
        ...state,
        sum: [...state.sum, action.payload],
      };
    case ActionType.UPDATE_GRAND_SUM:
      return {
        ...state,
        grandSum: [...state.grandSum, action.payload],
      };
    case ActionType.UPDATE_MEMORY:
      return {
        ...state,
        memory: [...state.memory, action.payload],
      };
    case ActionType.BACKSPACE:
      return {
        ...state,
        display: state.display.slice(0, -1) || "0",
      };
    case ActionType.CLEAR_DISPLAY:
      return {
        ...state,
        display: "0",
      };
    case ActionType.CLEAR_SUM:
      return {
        ...state,
        sum: [] as number[],
      };
    case ActionType.CLEAR_MEMORY:
      return {
        ...state,
        memory: [] as number[],
      };
    case ActionType.CLEAR_GRAND_SUM:
      return {
        ...state,
        grandSum: [] as number[],
      };
    case ActionType.CLEAR_ALL:
      return {
        ...state,
        auxNumber: 0,
        operator: "" as Operator,
        display: "0",
        sum: [] as number[],
        grandSum: [] as number[],
        memory: [] as number[],
      };
    case ActionType.SET_PREV_BUTTON:
      return {
        ...state,
        prevButton: action.payload,
      };
    default:
      return state;
  }
};

export default CalculatorReducer;
