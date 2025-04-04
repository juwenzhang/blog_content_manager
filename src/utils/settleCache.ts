enum CacheType {
  localStorage = 'localStorage',
  sessionStorage = 'sessionStorage',
}

class SettleCache {
  private storage: Storage
  constructor(type: CacheType) {
    this.storage = type === CacheType.localStorage ? localStorage : sessionStorage
  }
  setCache<T>(key: string, value: T): void {
    if (value) {
      this.storage.setItem(key, JSON.stringify(value))
    }
  }

  getCache(key: string) {
    const value = this.storage.getItem(key) || ''
    if (value !== null) {
      try {
        return JSON.parse(value)
      } catch (err) {
        return ''
      }
    }
  }

  removeCache(key: string): void {
    this.storage.removeItem(key)
  }

  hasCache(key: string): boolean {
    return this.storage.getItem(key) !== null
  }

  clearCache(): void {
    this.storage.clear()
  }
}

const localCache: SettleCache = new SettleCache(CacheType.localStorage)
const sessionCache: SettleCache = new SettleCache(CacheType.sessionStorage)
export { localCache, sessionCache }
