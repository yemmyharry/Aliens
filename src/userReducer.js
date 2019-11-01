import { LOAD_USERS } from "./userAction";

const userInitialState = [];
export default (state = userInitialState, action) => {
  switch (action.type) {
    case LOAD_USERS:
      return [action.users];
    // case "NEW_USER":
    //   return [...state, action.users];
    default:
      return state;
  }
};
