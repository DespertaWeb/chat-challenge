import { createRouter, createWebHistory } from 'vue-router'
import MainContent from '../views/MainContent.vue'
import ChatDetail from '../views/ChatDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: MainContent
    },
    { path: '/:id',
      name: 'ChatDetail',
      component: ChatDetail,
      props: true
    }
  ]
})

export default router
