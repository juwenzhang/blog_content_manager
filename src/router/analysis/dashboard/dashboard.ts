import type { RouteType } from '@/types/RouteType.ts'

export default {
  path: '/home/analysis/dashboard',
  name: 'analysis/dashboard',
  component: () => import('@/views/home/pages/analysis/dashboard/dashboard.vue'),
} as RouteType
