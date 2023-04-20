import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OverView from '../views/OverView.vue'
import UserInfoView from '../views/UserInfoView.vue'
import LoginView from '../views/LoginView.vue'
import LandingView from '../views/LandingView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '',
          name: 'overview',
          component: OverView,
        },
        {
          path: 'userinfo',
          name: 'userinfo',
          component: UserInfoView,
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '',
      name: 'landing',
      component: LandingView,
    }
  ]
})

export default router
