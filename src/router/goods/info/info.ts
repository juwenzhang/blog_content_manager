import type { RouteType } from '@/types/RouteType.ts'

export default {
  path: '/home/goods/info',
  name: 'goods/info',
  component: () => import('@/views/home/pages/goods/info/info.vue')
} as RouteType
