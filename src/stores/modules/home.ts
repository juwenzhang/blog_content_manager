import { defineStore, type StoreDefinition } from 'pinia'
import { localCache } from '@/utils/settleCache.ts'
import { ADMIN_HOME_DATA, USER_HOME_DATA } from '@/constant'

interface homeStateType {
  adminHomeData?:
    | Record<string, Record<string, Array<{ name: string; url: string }>>>
    | Record<string, []>
  userHomeData?:
    | Record<string, Record<string, Array<{ name: string; url: string }>>>
    | Record<string, []>
  homeMenuData?:
    | Record<string, Record<string, Array<{ name: string; url: string }>>>
    | Record<string, []>
  isCollapse?: boolean
}

const useHomeStore: StoreDefinition = defineStore('home', {
  state: (): Partial<homeStateType> => {
    return {
      adminHomeData: JSON.parse(localCache.getCache(ADMIN_HOME_DATA)) as
        | Record<string, Record<string, Array<{ name: string; url: string }>>>
        | Record<string, []>,
      userHomeData: JSON.parse(localCache.getCache(USER_HOME_DATA)) as
        | Record<string, Record<string, Array<{ name: string; url: string }>>>
        | Record<string, []>,
      isCollapse: localCache.getCache('isCollapse') as boolean,
    }
  },

  getters: {
    getAdminHomeData<T>(
      state: homeStateType,
    ):
      | Record<string, Record<string, Array<{ name: string; url: string }>>>
      | Record<string, []>
      | T {
      return <
        | T
        | Record<string, Record<string, Array<{ name: string; url: string }>>>
        | Record<string, []>
      >state.adminHomeData
    },
    getUserHomeData<T>(
      state: homeStateType,
    ):
      | Record<string, Record<string, Array<{ name: string; url: string }>>>
      | Record<string, []>
      | T {
      return <
        | T
        | Record<string, Record<string, Array<{ name: string; url: string }>>>
        | Record<string, []>
      >state.userHomeData
    },
    getIsCollapse<T>(state: homeStateType): boolean | T {
      return <T | boolean>state.isCollapse
    },
  },

  actions: {
    setHomeData<T>(data: homeStateType): T | void {
      this.adminHomeData = data.adminHomeData as
        | Record<string, Record<string, Array<{ name: string; url: string }>>>
        | Record<string, []>
      this.userHomeData = data.userHomeData as
        | Record<string, Record<string, Array<{ name: string; url: string }>>>
        | Record<string, []>
      localCache.setCache(ADMIN_HOME_DATA, data.adminHomeData)
      localCache.setCache(USER_HOME_DATA, data.userHomeData)
    },
    setIsCollapse<T>(data: boolean): T | void {
      this.isCollapse = data
      localCache.setCache('isCollapse', JSON.stringify(data))
    },
  },
})

export function useHomeStoreAction(): ReturnType<typeof useHomeStore> {
  return useHomeStore()
}
