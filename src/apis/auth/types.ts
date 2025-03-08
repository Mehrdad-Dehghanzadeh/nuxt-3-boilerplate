import type { AxiosInstance } from 'axios'
import type { LoginPayload, LoginResponse } from '@type-apis/auth'

export type AuthAPI = ($axios: AxiosInstance) => {
  login(payload: LoginPayload): Promise<LoginResponse>
}
