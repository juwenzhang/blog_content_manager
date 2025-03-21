// 开始实现创建我们的 login 的store
import { defineStore, type StoreDefinition } from 'pinia'
import { useRouter } from 'vue-router'
import { userListRequest } from "@/services/index.ts"
import { localCache } from '@/utils/settleCache.ts'
import { TOKEN_KEY } from '@/constant'
import type { RouteType } from '@/types/RouteType.ts'
import type { LoginAccount } from '@/types/loginType.ts'
import { mapLocalRoutesToRouter } from '@/utils/map_routes.ts'

interface loginStoreType{
  username: string
  password: string
  phone: string
  type: string
  isRemPWD: boolean
  accessId: number,
  MenuData: Record<string, {name:string, url:string}>[]
}

const useLoginStore: StoreDefinition = defineStore('login', {
  state: ():Partial<loginStoreType>  => {
    return {
      username: "",
      password: "",
      phone: "",
      type: "account",
      isRemPWD: false,
      accessId: localCache.getCache("accessId") || 0,
      MenuData: localCache.getCache("MenuData") || [] as Record<string, {name:string, url:string}>[],
    }
  },

  actions: {
    setUsername<T>(username: string): T | void {
      this.username = username
    },
    setPassword<T>(password: string): T | void {
      this.password = password
    },
    setPhone<T>(phone: string): T | void {
      this.phone = phone
    },
    setType<T>(type: string): T | void {
      this.type = type
    },
    setIsRemPWD<T>(isRemPWD: boolean): T | void {
      this.isRemPWD = isRemPWD
    },
    setClearAll<T>(): T | void {
      this.username = ""
      this.password = ""
      this.phone = ""
      this.type = "account"
      this.isRemPWD = false
      this.accessId = localCache.getCache("accessId") || 0
      localCache.removeCache("MenuData")
      this.MenuData = []
    },
    setMenuData<T>(MenuData: Record<string,{name:string, url:string}>[]): T | void {
      const router:ReturnType<typeof useRouter> = useRouter()
      const dynamicRoutes:RouteType[] = []
      const localRoutes:RouteType[] = []
      const files:Record<string, any> = import.meta.glob('@/router/*/*/*.ts', { eager: true })
      for(const key in files) {
        const module = files[key]
        dynamicRoutes.push(module.default)
      }
      for(const key in MenuData) {
        for(const index in MenuData[key]) {
          const route = dynamicRoutes.find(item => item.path === MenuData[key][index].url)
          if(router.hasRoute(route?.name as string)) {
            router.removeRoute(route?.name as string)
          }
          if (route) {
            router.addRoute('home', route)
            localRoutes.push(route as RouteType)
          }
        }
      }
      if (localCache.hasCache("localRoutes")) {
        localCache.removeCache("localRoutes")
      }
      if (localCache.hasCache("MenuData")) {
        localCache.removeCache("MenuData")
      }
      localCache.setCache("localRoutes", localRoutes)
      localCache.setCache("MenuData", MenuData)
      this.MenuData = MenuData as Record<string, {name:string, url:string}>[]
    },
    setLocalRoutes<T>(router: ReturnType<typeof useRouter>): T | void {
      if (!localCache.hasCache("localRoutes")) {
        return
      }
      const localRoutes:RouteType[] = localCache.getCache("localRoutes") as RouteType[]
      mapLocalRoutesToRouter(localRoutes, router)
    },
    async loginAccountAction(account: LoginAccount) {
      try {
        const loginResult = await userListRequest.accountLoginRequest(account)
        this.accessId = loginResult?.id
        this.username = loginResult?.name
        localCache.setCache(TOKEN_KEY, loginResult?.token)
      } catch (error) {
        if (this.username === "juwenzhang") {
          this.accessId = 0
        } else {
          this.accessId = 1
        }
      }
    }
  },

  getters: {
    getUsername<T>():T | string {
      return <T | string>this.username
    },
    getPassword<T>():T | string {
      return <T | string>this.password
    },
    getPhone<T>():T | string {
      return <T | string>this.phone
    },
    getType<T>():T | string {
      return <T | string>this.type
    },
    getIsRemPWD<T>():T | boolean {
      return <T | boolean>this.isRemPWD
    },
    getAccessId<T>():T | number {
      return <T | number>this.accessId
    },
    getMenuData<T>():T | Record<string, {name:string, url:string}>[] {
      return <T | Record<string, {name:string, url:string}>[]>this.MenuData
    }
  }
})

export const useLoginStoreAction = ():ReturnType<typeof useLoginStore> => {
  return useLoginStore()
}
