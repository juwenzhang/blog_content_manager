import { useRouter } from 'vue-router'
import type { RouteType } from '@/types/RouteType.ts'
import { localCache } from '@/utils/settleCache.ts'

const router = useRouter()
const settleRoutes = () => {
  const localRoutes:RouteType[] = localCache.getCache("localRoutes")
  if (localRoutes) {
    localRoutes.forEach(item => {
      router.addRoute('home', item)
    })
  }
}
export default settleRoutes
