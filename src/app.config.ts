import { type AppConfig } from '@type'
import { version } from '../package.json'

const appConfing: AppConfig = {
  publicUrl: '/',
  appVersion: version,
  apiBaseUrl: 'http://localhost:999',
  cookieAuhtName: 'token',
  appName: 'nuxtBoilerplate'
}

export default defineAppConfig(appConfing)
