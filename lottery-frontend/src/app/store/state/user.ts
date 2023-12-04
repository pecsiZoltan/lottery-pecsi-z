export interface User {
  id: number | null,
  name: string | null,
  role: 'PLAYER' | 'GUEST' | null
}

export interface UserListItem {
  id: number | null,
  name: string | null,
}

export interface UserState {
  loggedInUser: User,
  users: UserListItem[]
}

export const dummyUser: User = {
  id: null,
  name: 'NOT LOGGED IN',
  role: 'GUEST'
};

export const initialUserState: UserState = {
  loggedInUser: dummyUser,
  users: []
}
