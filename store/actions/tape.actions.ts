import { Operator, TapeItem } from "../../types/propTypes";
import {
  deleteTape,
  fetchSavedIds,
  insertCalculations,
  insertSavedId,
} from "../../db";

import { API_URL } from "../../constants/database";
import { ActionType } from "../../types/actionTypes";
import { MAX_VALUE } from "../../constants/maxVaules";
import { calculateTape } from "../../logic";

export const setTape = (tape: TapeItem[]) => {
  return async (dispatch: any) => {
    try {
      deleteTape();

      calculateTape(tape);

      dispatch({
        type: ActionType.SET_TAPE,
        payload: tape,
      });
    } catch (err) {
      console.log("🚀 ~ file: tape.actions.ts:34 ~ err:", err);
      alert("Error saving calculation in database");
    }
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

export const saveTape = (tape: TapeItem[]) => {
  return async () => {
    try {
      const res = await fetch(`${API_URL}tapes.json`, {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(tape),
      });

      const data = await res.json();
      const date = new Date().toLocaleDateString();

      await insertSavedId(data.name, date);
      alert("Tape saved in cloud");
    } catch (err) {
      console.log("🚀 ~ file: tape.actions.ts:34 ~ err:", err);
      alert("Error saving tape in cloud");
    }
  };
};

export const setSavedTapes = () => {
  return async (dispatch: any) => {
    try {
      const res = await (await fetchSavedIds()).rows._array;

      dispatch({
        type: ActionType.SET_SAVED_TAPES,
        payload: res,
      });
    } catch (err) {
      console.log("🚀 ~ file: tape.actions.ts:83 ~ err:", err);
      alert("Error retrieving tapes from cloud");
    }
  };
};
