import {
  createRouter,
  createWebHistory,
  type NavigationGuardNext,
  type RouteLocationNormalized
} from 'vue-router'
import { localCache } from '@/utils/settleCache.ts'
import { TOKEN_KEY } from '@/constant'

// 配置路由
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/home',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/home.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/error/error.vue')
    }
  ]
})

// 导航守卫
router.beforeEach((
  to:RouteLocationNormalized,
  _:RouteLocationNormalized,
  next:NavigationGuardNext
): void => {
  const token = localCache.getCache(TOKEN_KEY)
  if (!token && to.name !== 'login') {
    // other page
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
