import { Operator, TapeItem } from "../../types/propTypes";
import { deleteTape, insertCalculations } from "../../db";

import { ActionType } from "../../types/actionTypes";
import { MAX_VALUE } from "../../constants/maxVaules";

export const setTape = (tape: TapeItem[]) => {
  deleteTape().catch(err => {
    console.log("🚀 ~ file: tape.actions.ts:9 ~ err:", err.message);
    alert("Error deleting tape in database");
  });

  tape.forEach(item => {
    insertCalculations(item.number, item.operator, item.note).catch(err => {
      console.log("🚀 ~ file: tape.actions.ts:23 ~ err:", err.message);
      alert("Error saving calculation in database");
    });
  });

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
  insertCalculations(number, operator, note).catch(err => {
    console.log("🚀 ~ file: tape.actions.ts:23 ~ err:", err.message);
    alert("Error saving calculation in database");
  });
  return {
    type: ActionType.UPDATE_TAPE,
    payload: { number, operator, note },
  };
};

export const updateNote = (id: TapeItem["id"], note: TapeItem["note"]) => ({
  type: ActionType.UPDATE_NOTE,
  payload: { id, note },
});

export const clearTape = () => {
  deleteTape().catch(err => {
    console.log("🚀 ~ file: tape.actions.ts:41 ~ err:", err.message);
    alert("Error deleting tape in database");
  });
  return { type: ActionType.CLEAR_TAPE };
};
