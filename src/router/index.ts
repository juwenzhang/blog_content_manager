import { createRouter, createWebHistory } from 'vue-router'

// 配置路由
const router = createRouter({
  history: createWebHistory(),
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
      component: () => import('@/views/home/home.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/error/error.vue')
    }
  ]
})

// 导航守卫


export default router
