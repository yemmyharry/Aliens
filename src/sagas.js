
import { put, call, all, fork, take, takeEvery, takeLatest } from "redux-saga/effects";
import { eventChannel } from "redux-saga";
// import {switchToTable} from '../Components/action/switchPage';
import { postApi } from "./myApi";
import firebase from "firebase";
// import {} from '../Components/action/newUser';
import Config from "./myConfig";
import { newUser, loadUsers } from "./userAction";
import { RENDER_USERS, LOAD_USERS } from "./userAction";

firebase.initializeApp(Config);
const database = firebase.database();


function createEventChannel(){
  // yield delay(5000)
  // create an event listener that fires whenever a new user is added to the db
  const listener = eventChannel(
      emit => {
          database.ref("/users")
          .on("value",data => {
              return emit(data.val()||{})
          });
      return ()=>database.ref("/users").off(listener);
      }
  );

  return listener
}

console.log(createEventChannel())
// call the event listener to add a user upon recieving new users
function* updateItemSaga(){
  // create the event listener 
  const updateChannel = createEventChannel();
  // concurently get data from the event listener anytime it is fired
  while(true){

      const item =yield take(updateChannel);
      console.log(item);
      // dispatch the addUser action for the batch of new users
      yield put(loadUsers(Object.values(item)))
  }
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

function* addUserSaga(){
  yield takeLatest('NEW_USER',createUserSaga)
}



export default function* handleNewUser() {
  yield all([
    createUserSaga(),
    fork(updateItemSaga)
])
}
