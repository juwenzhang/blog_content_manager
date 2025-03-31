import { homeData } from '@/assets/data/homeData.ts'
import { localCache } from '@/utils/settleCache.ts'
export function SaveHomeDataInitLocalData<T>(): T | void {
  Object.keys(homeData).forEach(<T>(key: string): T | void => {
    localCache.setCache(key, JSON.stringify(homeData[key]))
  })
}
