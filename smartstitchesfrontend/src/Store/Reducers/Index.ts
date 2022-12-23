import { combineReducers } from "redux";
import ProductReducer from "./ProductReducers";
import LoadingReducer from "./LoadingReducer";
import MessageReducer from "./MessageReducer";

export default combineReducers({ ProductReducer , LoadingReducer , MessageReducer });
export type RootReducer = ReturnType<typeof combineReducers>;
