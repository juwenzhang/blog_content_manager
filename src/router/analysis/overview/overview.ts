import type { RouteType } from '@/types/RouteType.ts'

export default {
  path: '/home/analysis/overview',
  name: 'analysis/overview',
  component: () => import('@/views/home/pages/analysis/overview/overview.vue'),
} as RouteType
