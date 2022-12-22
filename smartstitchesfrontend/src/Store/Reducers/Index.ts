import { combineReducers } from "redux";
import ProductReducer from "./ProductReducers";

export default combineReducers({ ProductReducer });
export type RootState = ReturnType<typeof combineReducers>;
