import { ActionType, TapeAction } from "../../types/actionTypes";

import { TapeItem } from "../../types/propTypes";

const initialState = {
  tape: [] as TapeItem[],
};

const TapeReducer = (state = initialState, action: TapeAction) => {
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
          { id: state.tape.length, ...action.payload },
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
    default:
      return state;
  }
};

export default TapeReducer;
