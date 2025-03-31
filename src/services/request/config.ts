import MyAxiosRequest from '@/services/request/index.ts'
import type { MyAxiosRequestConfig } from '@/types/AxiosType.ts'
import { localCache } from '@/utils/settleCache.ts'
import { TOKEN_KEY } from '@/constant'

let BASE_URL: string
if (import.meta.env.PROD) {
  BASE_URL = 'https://juwenzhang.com/prod/api/'
} else {
  BASE_URL = 'https://juwenzhang.com/dev/api/'
}
const TIMEOUT: number = 10000
const config: MyAxiosRequestConfig = {
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  interceptors: {
    requestSuccessFn: (config) => {
      const token = localCache.getCache(TOKEN_KEY)
      if (config?.headers && token) {
        config.headers!.Authorization = 'Bearer ' + token
      }
      return config
    },
    requestFailFn: (err: any) => {},
  },
}
const axiosRequest = new MyAxiosRequest(config)
export default axiosRequest
