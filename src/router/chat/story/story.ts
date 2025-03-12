import type { RouteType } from '@/types/RouteType.ts'

export default {
  path: '/home/chat/story',
  name: 'chat/story',
  component: () => import('@/views/home/pages/chat/story/story.vue')
} as RouteType

