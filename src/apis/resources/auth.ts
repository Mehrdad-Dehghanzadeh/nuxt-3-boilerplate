import type {
  AuthApis,
  LoginPayload,
  LoginResponse,
  LoginResponseData
} from '@type-apis/Auth'

const authAPI: AuthApis = ($axios) => ({
  login(payload: LoginPayload) {
    return $axios.post<LoginResponseData, LoginResponse, LoginPayload>(
      '/auth/login',
      payload
    )
  }
})

export default authAPI
