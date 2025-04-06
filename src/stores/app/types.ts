import { type User } from '@type'

export type UserState = User | null

export type State = {
  user: UserState
  isLogin: boolean
}
