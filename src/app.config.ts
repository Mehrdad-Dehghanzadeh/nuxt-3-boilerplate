import AppConfig from '@types/AppConfig'

const appConfing: AppConfig = {
  publicUrl: '/',
  appVersion: '0.0.0',
  apiBaseUrl: 'http://localhost:999',
  cookieAuhtName: 'token'
}

export default defineAppConfig(appConfing)
