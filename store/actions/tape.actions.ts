import { ActionType } from "../../types/actionTypes";
import { MAX_VALUE } from "../../constants/maxVaules";
import { Operator } from "../../types/propTypes";

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

export const clearTape = () => ({
  type: ActionType.CLEAR_TAPE,
});
