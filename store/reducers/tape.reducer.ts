import { SavedTape, TapeItem } from "../../types/propTypes";

import { ActionType } from "../../types/actionTypes";
import { AnyAction } from "redux";

const initialState = {
  tape: [] as TapeItem[],
  savedTapes: [] as SavedTape[],
};

const TapeReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionType.SET_TAPE:
      return {
        ...state,
        tape: action.payload,
      };
    case ActionType.UPDATE_TAPE:
      return {
        ...state,
        tape: [
          ...state.tape,
          { id: state.tape.length + 1, ...action.payload },
        ] as TapeItem[],
      };
    case ActionType.UPDATE_NOTE:
      const newTape = [...state.tape];
      const index = newTape.findIndex(item => item.id === action.payload.id);
      newTape[index].note = action.payload.note;
      return {
        ...state,
        tape: newTape,
      };
    case ActionType.CLEAR_TAPE:
      return {
        ...state,
        tape: [] as TapeItem[],
      };
    case ActionType.SET_SAVED_TAPES:
      return {
        ...state,
        savedTapes: action.payload as SavedTape[],
      };
    default:
      return state;
  }
};

export default TapeReducer;
