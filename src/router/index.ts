import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tabSearch'
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tabExtend'
      },
      {
        path: 'tabExtend',
        component: () => import('@/views/Tab1Extend.vue')
      },
      {
        path: 'tabSearch',
        component: () => import('@/views/Tab2Search.vue')
      },
      {
        path: 'tabPublish',
        component: () => import('@/views/Tab3Publish.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
