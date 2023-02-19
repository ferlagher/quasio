import { ActionType, TapeAction } from "../../types/actionTypes";

import { TapeItem } from "../../types/propTypes";

const initialState = {
  tape: [] as TapeItem[],
};

const TapeReducer = (state = initialState, action: TapeAction) => {
  switch (action.type) {
    case ActionType.UPDATE_TAPE:
      return {
        ...state,
        tape: [...state.tape, { id: state.tape.length, ...action.payload }],
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
