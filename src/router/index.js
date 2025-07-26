import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/BerandaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'beranda',
      component: HomeView,
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/MenuView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/contack',
      name: 'contack',
      component: () => import('../views/ContackView.vue'),
    },
  ],
})

export default router
