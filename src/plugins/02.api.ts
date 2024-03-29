import axios from 'axios'
import configAutoImportApis from '@assets/api-plugin/autoImportApis'
import statusMessageMapping from '@assets/api-plugin/statusMessageMapping'
import interceptorsRequest from '@assets/api-plugin/interceptorsRequest'
import interceptorsResponse from '@assets/api-plugin/interceptorsResponse'
import defaultHeader from '@assets/api-plugin/defaultHeader'
import { type AppConfig } from '@type'

export default defineNuxtPlugin((nuxtApp) => {
  const { $i18n } = nuxtApp
  const { apiBaseUrl } = <Pick<AppConfig, 'apiBaseUrl'>>useAppConfig()
  const $axios = axios.create({
    baseURL: apiBaseUrl,
    headers: defaultHeader
  })

  const api: any = {}
  configAutoImportApis(api, $axios)
  interceptorsRequest($axios)
  interceptorsResponse($axios)
  statusMessageMapping($axios, $i18n)

  return {
    provide: {
      api
    }
  }
})
