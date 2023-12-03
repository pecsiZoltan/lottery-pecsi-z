import {createReducer, on} from "@ngrx/store";
import {logUserIn, logUserOut, storeUserList} from "../action/user.actions";
import {dummyUser, initialUserState} from "../state/user";

export const userReducer = createReducer(
  initialUserState,
  on(
    logUserIn,
    (state, {user}) => ({...state, loggedInUser: user})
  ),
  on(
    logUserOut,
    (state) => ({...state, loggedInUser: dummyUser})
  ),
  on(
    storeUserList,
    (state, {users}) => ({...state, users: users})
  )
)
