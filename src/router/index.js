import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/MangoDash.vue'

const routes = [
  // Web Site
  {
    path: '/',
    name: 'landing-page',
    component: () => import('../website/LandingPage.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../website/Home.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('../website/Services.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../website/About.vue')
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('../website/Portfolio.vue')
  },
  // Dash
  {
    path: '/dash',
    name: 'dash',
    component: HomeView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
