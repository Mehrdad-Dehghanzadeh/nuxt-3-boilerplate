import axios from 'axios'
import configAutoImportApis from '@assets/api-config/autoImportApis'
import statusMessageMapping from '@assets/api-config/statusMessageMapping'
import interceptorsRequest from '@assets/api-config/interceptorsRequest'
import defaultHeader from '@assets/api-config/defaultHeader'

export default defineNuxtPlugin((nuxtApp) => {
  const { $i18n } = nuxtApp
  const { apiBaseUrl } = useAppConfig()
  const $axios = axios.create({
    baseURL: apiBaseUrl,
    headers: defaultHeader
  })

  const api: any = {}
  configAutoImportApis(api, $axios)
  interceptorsRequest($axios, {})
  statusMessageMapping($axios, $i18n)

  return {
    provide: {
      api
    }
  }
})
