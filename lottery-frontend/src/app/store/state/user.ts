export interface User {
  id: number | null,
  name: string | null,
  role: 'PLAYER' | 'GUEST' | null
}

export interface UserState {
  loggedInUser: User,
  users: User[]
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
