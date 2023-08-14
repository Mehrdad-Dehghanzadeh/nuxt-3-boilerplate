import axios from 'axios'
import configAutoImportApis from '@assets/api-plugin/autoImportApis'
import statusMessageMapping from '@assets/api-plugin/statusMessageMapping'
import interceptorsRequest from '@assets/api-plugin/interceptorsRequest'
import defaultHeader from '@assets/api-plugin/defaultHeader'

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
