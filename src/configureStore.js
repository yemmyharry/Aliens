import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from "./userReducer";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import handleNewUser from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const enhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));
export default () => {
  const store = createStore(
    combineReducers({
      users: userReducer
    }),
    enhancers
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  sagaMiddleware.run(handleNewUser);
  return store;
};
