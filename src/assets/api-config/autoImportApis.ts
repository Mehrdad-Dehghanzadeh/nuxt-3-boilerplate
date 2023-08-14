import { AxiosInstance } from 'axios'

export default function (api: any, $axios: AxiosInstance) {
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
