import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OverView from '../views/OverView.vue'
import UserInfoView from '../views/UserInfoView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import LandingView from '../views/LandingView.vue'
import TestDesign from '../views/TestDesign.vue'
import CreateDesign from '../components/CreateDesign.vue'

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
        },
        {
          path: 'design',
          name: 'design',
          component: CreateDesign,
        },
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
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/test',
      name: 'test',
      component: TestDesign,
    },

  ]
})

export default router
