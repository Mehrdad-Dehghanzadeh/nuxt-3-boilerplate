import type { AxiosInstance } from 'axios'
import type { ApisPlugin } from '@type'
import authAPI from '@apis/resources/auth'

export default function createApis($axios: AxiosInstance): ApisPlugin {
  return {
    auth: authAPI($axios)
  }
}
