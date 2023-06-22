import { AxiosResponse, AxiosInstance } from 'axios'
import { ResponseApi } from '@interfaces/apis'

export function statusMessageMapping(response: AxiosResponse, i18n: any) {
  if (response) {
    const { status } = response

    return <ResponseApi>{
      ...response,
      statusMessage: i18n?.messages[i18n.locale]?.errors?.statusMessage[status] || ''
    }
  }
}

export function configInterceptorsResponse($axios: any) {
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
