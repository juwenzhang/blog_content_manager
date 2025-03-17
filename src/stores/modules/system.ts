import { defineStore, type StoreDefinition } from 'pinia'
import { postUserListRequest } from '@/services/modules/home/system/user.ts'
import { type systemStateType } from '@/types/systemType.ts'
import * as userListData from '@/assets/data/userList.json'

const useSystemStore: StoreDefinition = defineStore('system', {
  state: (): systemStateType => ({
    systemUserList: {
      list: [],
      total: 0
    }
  }),

  getters: {

  },

  actions: {
    async postUserListRequest(query_params: { offset: number, size: number }) {
      try {
        const userList = await postUserListRequest(query_params)
        if (userList?.data) {
          this.systemUserList = userList?.data
        }
        return userList?.data

      } catch (_) {
        const needShowData = userListData?.data?.list.filter((item: any, index: number) => {
          if(index >= query_params.offset && index < query_params.offset + query_params.size) {
            return item
          }
        })
        this.systemUserList = {
          list: [
            ...needShowData
          ],
          total: userListData?.data?.total || 0
        }
        return this.systemUserList
      }
    }
  }
})

export const useSystemStoreAction = ():ReturnType<typeof useSystemStore> => {
  return useSystemStore()
}
