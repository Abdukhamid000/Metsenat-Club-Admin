import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Sponsors from '../views/Admin/_sponsors.vue'
import Admin from '../views/Admin/index.vue'
import auth from '@/middleware/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter: [auth],
      component: HomeView
    },

    {
      path: '/admin',
      name: 'admin',
      beforeEnter: [auth],
      component: Admin,
      children: [
        {
          path: 'sponsors',
          name: 'sponsors',
          component: Sponsors
        }
        // {
        //   path: "dashboard",
        //   name: "admin-dashboard",
        //   component: Dashboard,
        // },
      ]
    }
  ]
})

export default router
