import {createAction, props} from "@ngrx/store";
import {User} from "../state/user";

export const logUserIn = createAction(
  '[User Auth] Save',
  props<{ user: User }>()
)
export const logUserOut = createAction(
  '[User Auth] Empty'
)

export const storeUserList = createAction(
  '[User List] Save',
  props<{ users: User[] }>()
)

