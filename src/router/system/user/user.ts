import type { RouteType } from '@/types/RouteType.ts'

export default {
  path: '/home/system/user',
  name: 'system/user',
  component: () => import('@/views/home/pages/system/user/user.vue'),
} as RouteType
