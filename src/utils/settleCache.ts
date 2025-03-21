enum CacheType {
  localStorage = 'localStorage',
  sessionStorage = 'sessionStorage'
}

class SettleCache {
  private storage:Storage
  constructor<T>(type:CacheType):T | void {
     this.storage = type === CacheType.localStorage ? localStorage : sessionStorage
  }
  setCache<T>(key:string, value:T): T | void {
    if (value) {
      this.storage.setItem(key, JSON.stringify(value))
    }
  }

  getCache(key:string){
    const value = this.storage.getItem(key) || ""
    if (value !== null) {
      try {
        return JSON.parse(value)
      } catch(err) {
        return ""
      }
    }
  }

  removeCache<T>(key:string):T | void {
    this.storage.removeItem(key)
  }

  hasCache<T>(key:string):T | boolean {
    return this.storage.getItem(key) !== null
  }

  clearCache<T>():T | void {
    this.storage.clear()
  }
}

const localCache: SettleCache = new SettleCache(CacheType.localStorage)
const sessionCache: SettleCache = new SettleCache(CacheType.sessionStorage)
export {
  localCache,
  sessionCache
}
