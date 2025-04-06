import type { TAuthApis } from '@type-apis/Auth'

export type ApisPlugin = {
  auth: ReturnType<TAuthApis>
}
