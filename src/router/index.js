import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OverView from '../views/OverView.vue'
import UserInfoView from '../views/UserInfoView.vue'
import AboutView from '../views/AboutView.vue'
import TestRoughView from '../views/TestRoughView.vue'
import RoughJsView from '../views/RoughJsView.vue'
import LoginView from '../views/LoginView.vue'
import LandingView from '../views/LandingView.vue'
import CreateDesign from '../components/CreateDesign.vue'
import RoughJs from '../components/RoughJs.vue'

import TestDesign from '../views/TestDesign.vue'
import TestCtrlScroll from '../views/TestCtrlScroll.vue'
import TestCanvasResponsive from '../views/TestCanvasResponsive.vue'


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
        {
          path: 'designrough',
          name: 'designrough',
          component: RoughJs,
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
      path: '/testrough',
      name: 'testrough',
      component: RoughJsView,
    },
    {
      path: '/test',
      name: 'test',
      component: TestDesign,
    },
    {
      path: '/test_scroll',
      name: 'test_scroll',
      component: TestCtrlScroll,
    },
    {
      path: '/test_cvrs',
      name: 'test_cvrs',
      component: TestCanvasResponsive,
    },

  ]
})

export default router
