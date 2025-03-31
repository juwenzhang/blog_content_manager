import axiosRequest from '@/services/request/config.ts'
import type { LoginAccount, LoginConfigCode } from '@/types/loginType.ts'

export const accountLoginRequest = (account: LoginAccount) => {
  return axiosRequest.post<any>({
    url: '/user/account/login',
    data: account,
  })
}

export const phoneLoginRequest = (phone: LoginConfigCode) => {
  return axiosRequest.post<any>({
    url: '/user/phone/login',
    data: phone,
  })
}

export const getUserInfoByIdRequest = (id: number) => {
  return axiosRequest.get<any>({
    url: `/user/info/`,
    params: {
      id,
    },
  })
}
