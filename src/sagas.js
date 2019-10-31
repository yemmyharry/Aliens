
import { put, call, all, fork, take, takeEvery } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
// import {switchToTable} from '../Components/action/switchPage';
import { postApi } from "./myApi";
import firebase from "firebase";
// import {} from '../Components/action/newUser';
import Config from "./myConfig";
import { newUser } from "./userAction";
import { RENDER_USERS, LOAD_USERS } from "./userAction";

firebase.initializeApp(Config);
const database = firebase.database();

function createEventChannel() {
  const listener = eventChannel(emit => {
    database
      .ref("/users")
      .on("value", snapshot => emit({ data: snapshot.val() || {} }));

    return () => database.ref("/users").off(listener);
  });

  return listener;
}



function* createUserSaga() {
  const action = yield take("NEW_USER");

  const users = action.users;

  try {
    yield call(postApi, users);
    
  } catch (error) {
    console.error("error:", error);
  }
}

//Fetch
function* fetchToDoList() {
  const endpoint =
    "https://us-central1-update-table-b7e83.cloudfunctions.net/users";
  const response = yield call(fetch, endpoint);
  const data = yield response.json();
  console.log(data);
  yield put({ type: LOAD_USERS, users:data });
}



export default function* handleNewUser() {
  yield fork(createUserSaga);
  yield fork(fetchToDoList);
}
