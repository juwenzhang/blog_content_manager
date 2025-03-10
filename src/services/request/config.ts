import { MyAxiosRequest } from '@/servers/request/index.ts'
import type { MyAxiosRequestConfig } from '@/types/AxiosType.ts'

let BASE_URL: string
if (import.meta.env.PROD) {
  BASE_URL = "https://juwenzhang.com/prod/api/"
} else {
  BASE_URL = "https://juwenzhang.com/dev/api/"
}

const TIMEOUT: number = 10000
const config: MyAxiosRequestConfig = {
  baseURL: BASE_URL,
  timeout: TIMEOUT
}
const axiosRequest = new MyAxiosRequest(config)

export default axiosRequest
