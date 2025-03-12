import type { RouteType } from '@/types/RouteType.ts'

export default {
  path: '/home/goods/category',
  name: 'goods/category',
  component: () => import('@/views/home/pages/goods/category/category.vue')
} as RouteType
