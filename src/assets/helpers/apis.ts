import { AxiosResponse, AxiosInstance, AxiosError } from 'axios'
import { ResponseApi } from '@interfaces/apis'

export function statusMessageMapping($axios: AxiosInstance, i18n: any) {
  $axios.interceptors.response.use(
    (res: AxiosResponse) => {
      if (res) {
        const { status } = res

        return <ResponseApi>Promise.resolve({
          ...res,
          statusMessage:
            i18n?.messages?.value?.[i18n?.locale?.value]?.errors?.statusMessage?.[status]
              ?.source || ''
        })
      }
    },
    (error: AxiosError) => {
      const { status } = error.response

      return <ResponseApi>Promise.reject({
        ...error.response,
        statusMessage:
          i18n?.messages?.value?.[i18n?.locale?.value]?.errors?.statusMessage?.[status]
            ?.source || ''
      })
    }
  )
}

export function configInterceptorsResponse($axios: AxiosInstance) {
  $axios.interceptors.response.use((res: AxiosResponse) => {})
}

export function configAutoImportApis(api: any, $axios: AxiosInstance) {
  const apisModules: any = import.meta.glob(`../../apis/*.(ts|js)`, { eager: true })

  for (const apiFile in apisModules) {
    const fileName: string = apiFile
      .replace('../../apis', '')
      .replaceAll('/', '')
      .replace('.js', '')
      .replace('.ts', '')
    api[fileName] = apisModules[apiFile as keyof typeof apisModules]?.default($axios)
  }
}
