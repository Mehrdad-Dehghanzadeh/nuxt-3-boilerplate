import axios from 'axios'
import configAutoImportApis from '@helpers/api-config/autoImportApis'
import statusMessageMapping from '@helpers/api-config/statusMessageMapping'

const DEFAULT_HEADERS = {}

export default defineNuxtPlugin((nuxtApp) => {
  const { $i18n } = nuxtApp
  const { apiBaseUrl } = useAppConfig()
  const $axios = axios.create({
    baseURL: apiBaseUrl,
    headers: DEFAULT_HEADERS
  })

  const api: any = {}
  configAutoImportApis(api, $axios)
  statusMessageMapping($axios, $i18n)

  return {
    provide: {
      api
    }
  }
})
