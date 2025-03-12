import { homeData } from "@/assets/data/homeData.ts"
import { localCache } from '@/utils/settleCache.ts'
export function SaveHomeDataInitLocalData() {
  Object.keys(homeData).forEach((key) => {
    localCache.setCache(key, JSON.stringify(homeData[key]))
  })
}
