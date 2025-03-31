import { defineStore, type StoreDefinition } from 'pinia'
import { deleteUserByIdRequest, postUserListRequest } from '@/services/modules/home/system/user.ts'
import { type systemStateType } from '@/types/systemType.ts'
import * as userListData from '@/assets/data/userList.json'

interface searchForm {
  username: string
  phone: string
  email: string
  status: string
  date: string
}

const useSystemStore: StoreDefinition = defineStore('system', {
  state: (): systemStateType => ({
    systemUserList: {
      list: [],
      total: 0,
    },
  }),

  getters: {
    getUserList(): systemStateType['systemUserList'] {
      return this.systemUserList
    },
  },

  actions: {
    async postUserListRequest(
      pageName: string,
      query_params: { offset: number; size: number; searchForm: Partial<searchForm> },
    ) {
      try {
        console.log(pageName)
        const userList = await postUserListRequest(query_params)
        const needShowData = userList?.data?.list.filter(<T>(item: T, index: number) => {
          if (index >= query_params.offset && index < query_params.offset + query_params.size) {
            return item
          }
        })
        if (userList?.data) {
          this.systemUserList = {
            list: [...needShowData],
            total: userList?.data?.total || 0,
          }
        }
        return this.systemUserList
      } catch (_) {
        const needShowData = userListData?.data?.list.filter(<T>(item: T, index: number) => {
          if (index >= query_params.offset && index < query_params.offset + query_params.size) {
            return item
          }
        })
        this.systemUserList = {
          list: [...needShowData],
          total: userListData?.data?.total || 0,
        }
        return this.systemUserList
      }
    },

    async deleteUserByIdRequest<T>(id: T) {
      try {
        const deleteUser = await deleteUserByIdRequest(id)
      } catch (_) {
        const userList = this?.systemUserList?.list || []
        const total = this?.systemUserList?.total || 0
        const deleteUser = userList.filter((item: any) => {
          return item?.id !== id
        })
        this.systemUserList = {
          list: [...deleteUser],
          total: total - 1,
        }
        return this.systemUserList
      }
    },
  },
})

export const useSystemStoreAction = (): ReturnType<typeof useSystemStore> => {
  return useSystemStore()
}
