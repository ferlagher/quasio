import { combineReducers, createStore } from "redux";

import CalculatorReducer from "./reducers/calculator.reducer";
import TapeReducer from "./reducers/tape.reducer";

const RootReducer = combineReducers({
  calculator: CalculatorReducer,
  tape: TapeReducer,
});

export * from "./actions/calculator.actions";
export * from "./actions/tape.actions";
export type RootState = ReturnType<typeof RootReducer>;
export default createStore(RootReducer);
