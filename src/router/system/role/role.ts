import type { RouteType } from '@/types/RouteType.ts'

export default {
  path: '/home/system/role',
  name: 'system/role',
  component: () => import('@/views/home/pages/system/role/role.vue'),
} as RouteType
