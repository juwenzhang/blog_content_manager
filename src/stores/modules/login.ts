// 开始实现创建我们的 login 的store
import { defineStore, type StoreDefinition } from 'pinia'
import { useRouter } from 'vue-router'
import { userListRequest } from "@/services/index.ts"
import { localCache } from '@/utils/settleCache.ts'
import { TOKEN_KEY } from '@/constant'
import type { RouteType } from '@/types/RouteType.ts'
import type { LoginAccount } from '@/types/loginType.ts'

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
    setUsername(username: string) {
      this.username = username
    },
    setPassword(password: string) {
      this.password = password
    },
    setPhone(phone: string) {
      this.phone = phone
    },
    setType(type: string) {
      this.type = type
    },
    setIsRemPWD(isRemPWD: boolean) {
      this.isRemPWD = isRemPWD
    },
    setClearAll() {
      this.username = ""
      this.password = ""
      this.phone = ""
      this.type = "account"
      this.isRemPWD = false
      this.accessId = localCache.getCache("accessId") || 0
      localCache.removeCache("MenuData")
      this.MenuData = []
    },
    setMenuData(MenuData: Record<string,{name:string, url:string}>[]) {
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
    async loginAccountAction(account: LoginAccount) {
      try {
        const loginResult = await userListRequest.accountLoginRequest(account)
        this.accessId = loginResult.id
        this.username = loginResult.name
        localCache.setCache(TOKEN_KEY, loginResult.token)
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
    getUsername(): string {
      return <string>this.username
    },
    getPassword(): string {
      return <string>this.password
    },
    getPhone(): string {
      return <string>this.phone
    },
    getType(): string {
      return <string>this.type
    },
    getIsRemPWD(): boolean {
      return <boolean>this.isRemPWD
    },
    getAccessId(): number {
      return <number>this.accessId
    },
    getMenuData(): Record<string, {name:string, url:string}>[] {
      return <Record<string, {name:string, url:string}>[]>this.MenuData
    }
  }
})

export const useLoginStoreAction = ():ReturnType<typeof useLoginStore> => {
  return useLoginStore()
}
