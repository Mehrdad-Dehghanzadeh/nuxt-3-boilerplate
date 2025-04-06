import type { TAuthApis } from './Auth'
import type { ApisPlugin } from '@type'

export type AuthApiMethods = keyof ReturnType<TAuthApis>

export type ApiMethods = AuthApiMethods

export type ApiResources = keyof ApisPlugin
