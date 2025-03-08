import type { LoginPayload, LoginResponse } from '@type-apis/auth'

export type AuthPlugin = {
  login: (payload: LoginPayload) => Promise<LoginResponse>
  logout: () => Promise<boolean>
  removeToken: () => void
  init: () => void
}
