import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "../Store/Reducers/Index";
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  //this activates the redux dev tool on the browser
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
export type RootState = ReturnType<typeof rootReducer>;
