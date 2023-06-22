import { AxiosResponse } from 'axios'

export interface ResponseApi extends AxiosResponse {
  statusMessage: string
}