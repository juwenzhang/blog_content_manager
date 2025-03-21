import {
  createRouter,
  createWebHistory,
  type NavigationGuardNext,
  type RouteLocationNormalized, useRouter
} from 'vue-router'
import { localCache } from '@/utils/settleCache.ts'
import { TOKEN_KEY } from '@/constant'

// 配置路由
const router: ReturnType<typeof createRouter> = createRouter({
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
router.beforeEach(<T>(
  to:RouteLocationNormalized,
  _:RouteLocationNormalized,
  next:NavigationGuardNext
):T | void => {
  const token = localCache.getCache(TOKEN_KEY)
  if (!token && to.name !== 'login') {
    // other page
    next({ name: 'login' })
  } else {
    next()
  }
})

export default router
