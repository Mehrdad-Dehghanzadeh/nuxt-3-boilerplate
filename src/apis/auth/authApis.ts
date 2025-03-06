import type { AuthAPI, LoginPayload, LoginResponse, LoginResponseData } from './types'

const authAPI: AuthAPI = ($axios) => ({
  login(payload: LoginPayload) {
    return $axios.post<LoginResponseData, LoginResponse, LoginPayload>(
      '/auth/login',
      payload
    )
  }
})

export default authAPI
