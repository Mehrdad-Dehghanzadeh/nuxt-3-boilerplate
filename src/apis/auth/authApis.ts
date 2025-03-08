import type { AuthAPI } from './types'
import type { LoginPayload, LoginResponse, LoginResponseData } from '@type-apis/Auth'

const authAPI: AuthAPI = ($axios) => ({
  login(payload: LoginPayload) {
    return $axios.post<LoginResponseData, LoginResponse, LoginPayload>(
      '/auth/login',
      payload
    )
  }
})

export default authAPI
