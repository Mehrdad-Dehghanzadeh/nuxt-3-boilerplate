import type { AxiosResponse, AxiosInstance } from 'axios'
import type { LoginModel } from '@models/Auth'

export interface LoginPayload extends LoginModel {}

export interface LoginResponseData {
  token: string
}

export interface LoginResponse extends AxiosResponse<LoginResponseData> {}

export type AuthAPI = ($axios: AxiosInstance) => {
  login(payload: LoginPayload): Promise<LoginResponse>
}
