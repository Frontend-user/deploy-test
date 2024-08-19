import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'posts' }
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../views/PostsView.vue')
    },
    {
      path: `/posts/:id`,
      name: 'post-detail',
      component: () => import('../components/post-detail.vue')
    }
  ]
})

export default router
