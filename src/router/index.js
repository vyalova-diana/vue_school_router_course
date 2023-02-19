import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/brazil',
      name: 'brazil',
      component: () => import('../views/BrazilView.vue')
    },
    {
      path: '/hawaii',
      name: 'hawaii',
      component: () => import('../views/HawaiiView.vue')
    },
    {
      path: '/jamaica',
      name: 'jamaica',
      component: () => import('../views/JamaicaView.vue')
    },
    {
      path: '/panama',
      name: 'panama',
      component: () => import('../views/PanamaView.vue')
    }
  ]
})

export default router
