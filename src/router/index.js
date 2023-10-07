import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // Web Site
  {
    path: '/',
    name: 'login-page',
    component: () => import('@/views/Login.vue')
  },
   //Dash
  {
    path: '/dash',
   name: 'dash',
    component: () => import('@/views/Dash.vue')
  },
  {
    path: '/panel',
   name: 'panel',
    component: () => import('@/views/Panel.vue')
  },
  {
    path: '/edition',
    name: 'edition',
    component: () => import('@/views/Edition.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/views/Blog.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
