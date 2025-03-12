import type { RouteType } from '@/types/RouteType.ts'

export default {
  path: '/home/system/menu',
  name: 'system/menu',
  component: () => import('@/views/home/pages/system/menu/menu.vue')
} as RouteType
