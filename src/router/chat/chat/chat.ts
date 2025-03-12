import type { RouteType } from '@/types/RouteType.ts'

export default {
  path: '/home/chat/chat',
  name: 'chat/chat',
  component: () => import('@/views/home/pages/chat/chat/chat.vue')
} as RouteType
