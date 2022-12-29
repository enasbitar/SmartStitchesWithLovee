import { combineReducers } from "redux";
import ProductReducer from "./ProductReducers";
import LoadingReducer from "./LoadingReducer";
import MessageReducer from "./MessageReducer";
import UsersReducer from "./UsersReducer";

export default combineReducers({
  ProductReducer,
  LoadingReducer,
  MessageReducer,
  UsersReducer,
});
export type RootReducer = ReturnType<typeof combineReducers>;
