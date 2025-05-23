import type {
  TAuthApis,
  LoginPayload,
  LoginResponse,
  LoginResponseData
} from '@type-apis/Auth'

const authAPI: TAuthApis = ($axios) => ({
  login(payload: LoginPayload) {
    return $axios.post<LoginResponseData, LoginResponse, LoginPayload>(
      '/auth/login',
      payload
    )
  }
})

export default authAPI
