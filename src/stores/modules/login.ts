// 开始实现创建我们的 login 的store
import { defineStore, type StoreDefinition } from 'pinia'

interface storeType  {
  username: string;
  password: string;
  phone: string;
  type: string;
  isRemPWD: boolean
}

const loginStore: StoreDefinition = defineStore('login', {
  state: ():Partial<storeType>  => {
    return {
      username: "",
      password: "",
      phone: "",
      type: "account",
      isRemPWD: false
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
    }
  }
})

export const loginStoreAction = () => {
  return loginStore()
}
