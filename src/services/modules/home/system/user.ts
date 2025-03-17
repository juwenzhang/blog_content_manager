import axiosRequest from '@/services/request/config.ts'

export const postUserListRequest = (
  query_params: {offset: number, size: number} = {offset: 0, size: 10}
) => {
  return axiosRequest.post<any>({
    url: '/user/list',
    data: {
      ...query_params
    }
  })
}
