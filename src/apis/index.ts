import type { AxiosInstance } from 'axios'
import type { TApi } from './types'
import authAPI from '@apis/auth/authApis'

export default function createApis($axios: AxiosInstance): TApi {
  return {
    auth: authAPI($axios)
  }
}
