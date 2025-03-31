import axiosRequest from '@/services/request/config.ts'

interface searchForm {
  username: string
  phone: string
  email: string
  status: string
  date: string
}

export const postUserListRequest = (
  query_params: { offset: number; size: number; searchForm: Partial<searchForm> } = {
    offset: 0,
    size: 10,
    searchForm: {},
  },
) => {
  return axiosRequest.post<any>({
    url: '/user/list',
    data: {
      ...query_params,
    },
  })
}

export const deleteUserByIdRequest = <T>(id: T) => {
  return axiosRequest.delete<any>({
    url: `/user/delete/${id}`,
  })
}
