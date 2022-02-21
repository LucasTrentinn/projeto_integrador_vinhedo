import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vinhos',
      name: 'vinhos',
      component: () => import('../views/VinhosView.vue')
    },
    {
      path: '/vinhos/:id',
      name: 'vinhoz',
      component: () => import('../views/VinhoView.vue')
    }
  ]
})

export default router
