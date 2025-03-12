import type { RouteType } from '@/types/RouteType.ts'

export default {
  name: 'system/department',
  path: '/home/system/department',
  component: () => import('@/views/home/pages/system/department/department.vue')
} as RouteType
