import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import sourceData from "@/data.json"
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
      props: route => ({...route.params, id: parseInt(route.params.id)}),
      beforeEnter(to, from){
        const exists = sourceData.destinations.find(
            destination => destination.id === parseInt(to.params.id)
        )
        if(!exists) return {
          name: 'NotFound',
          //allows keeping the URL while rendering a different page
          params: { pathMatch: to.path.split('/').slice(1)},
          query: to.query,
          hash: to.hash
        }
      },
      children: [
        {
          path: ':experienceSlug',
          name: 'experience.show',
          component: () => import('../views/ExperienceShow.vue'),
          props: route => ({...route.params, id: parseInt(route.params.id)})
        }
      ],

    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue')
    },
    {
      path: '/protected',
      name: 'protected',
      component: () => import('../views/Protected.vue'),
      meta: {
        requiresAuth : true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/invoices',
      name: 'invoices',
      component: () => import('../views/Invoices.vue'),
      meta: {
        requiresAuth : true
      }
    },


  ],
  scrollBehavior(to,from,savedPosition) {
    return savedPosition || new Promise((resolve) => {
      setTimeout(() => resolve({top:0}),300) //to avoid conflict with transition
    })
  }
  // linkActiveClass: "vue-school-active-link" //default: "router-link-active"
})
router.beforeEach((to,from) => { //global navigation guard
  if (to.meta.requiresAuth && !window.user) {
    return {name:'login', query:{redirect: to.fullPath}}
  }
})
export default router
