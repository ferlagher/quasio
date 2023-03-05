import { Operator, TapeItem } from "../../types/propTypes";

import { ActionType } from "../../types/actionTypes";
import { MAX_VALUE } from "../../constants/maxVaules";

export const setTape = (tape: TapeItem[]) => {
  return {
    type: ActionType.SET_TAPE,
    payload: tape,
  };
};

export const updateTape = (
  operator: Operator,
  number: number = 0,
  note?: string
) => {
  number = Math.min(number, MAX_VALUE);
  return {
    type: ActionType.UPDATE_TAPE,
    payload: { number, operator, note },
  };
};

export const updateNote = (id: TapeItem["id"], note: TapeItem["note"]) => ({
  type: ActionType.UPDATE_NOTE,
  payload: { id, note },
});

export const clearTape = () => ({
  type: ActionType.CLEAR_TAPE,
});
