import { combineReducers } from "redux";
import ProductReducer from "./ProductReducers";
import LoadingReducer from "./LoadingReducer"

export default combineReducers({ ProductReducer , LoadingReducer });
export type RootState = ReturnType<typeof combineReducers>;
