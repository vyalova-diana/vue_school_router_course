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
      path: '/destination/:id/:slug',
      name: 'destination.show',
      component: () => import('../views/DestinationShow.vue'),
      props: route => ({id: parseInt(route.params.id)})
    }
  ],
  // linkActiveClass: "vue-school-active-link" //default: "router-link-active"
})

export default router
