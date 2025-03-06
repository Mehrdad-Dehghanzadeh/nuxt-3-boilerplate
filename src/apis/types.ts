import type { AuthAPI } from '@apis/auth/types'

export type TApi = {
  auth: ReturnType<AuthAPI>
}
