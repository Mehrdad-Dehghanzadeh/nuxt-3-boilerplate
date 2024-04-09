import { type AppConfig } from '@type'
import { version } from '../package.json'

const appConfing: AppConfig = {
  publicUrl: '/',
  appVersion: version,
  apiBaseUrl: 'http://192.168.250.64:6040/api/v1',
  appName: 'nuxtBoilerplate'
}

export default defineAppConfig(appConfing)
