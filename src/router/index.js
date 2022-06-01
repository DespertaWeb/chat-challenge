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
    // TODO clean
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separ../views/LeftSidebar.vue].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
