import {createFeatureSelector, createSelector} from "@ngrx/store";
import {UserState} from "../state/user";

export const userState = createFeatureSelector<UserState>("userState")
export const selectRole =
  createSelector(
    userState,
    state => state.loggedInUser.role
  )

export const selectName =
  createSelector(
    userState,
    state => state.loggedInUser.name
  )

export const selectUserList =
  createSelector(
    userState,
    state => state.users
  )

export const selectUserById = (id: number) =>
  createSelector(
    userState,
    (state) => state.users.find(u => u.id === id)
  )

export const selectUserByName = (name: string) =>
  createSelector(
    userState,
    (state) => state.users.find(u => u.name === name)
  )


