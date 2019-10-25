import { createStore, combineReducers } from "redux";
import userReducer from "./userReducer";

export default () => {
  const store = createStore(
    combineReducers({
      users: userReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
