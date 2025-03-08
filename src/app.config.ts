import { type AppConfig } from '@type'
import { version } from '../package.json'

const appConfig: AppConfig = {
  publicUrl: '/',
  appVersion: version,
  apiBaseUrl: 'http://localhost:8080',
  cookieAuthName: 'access_token',
  appName: 'nuxtBoilerplate'
}

export default defineAppConfig(appConfig)
