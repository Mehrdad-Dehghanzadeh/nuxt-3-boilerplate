import appConfigType from '@type/appConfig'

const appConfing: appConfigType = {
  publicUrl: '/',
  appVersion: '0.0.0',
  apiBaseUrl: 'http://localhost:999',
  cookieAuhtName: 'token'
}

export default defineAppConfig(appConfing)
