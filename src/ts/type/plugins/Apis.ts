import type { AuthApis } from '@type-apis/Auth'

export type ApisPlugin = {
  auth: ReturnType<AuthApis>
}
