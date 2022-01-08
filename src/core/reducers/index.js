import { combineReducers } from "redux";
import { persReducer } from "./personalReducer";

const rootReducer = combineReducers({
  personal: persReducer,
});

export default rootReducer;
