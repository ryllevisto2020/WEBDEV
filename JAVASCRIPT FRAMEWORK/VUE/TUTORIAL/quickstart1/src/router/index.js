import { createRouter, createWebHistory } from 'vue-router'
import Fundamentals from '../views/Fundamentals.vue'
import Router from '../views/Router.vue'
import Post from '../views/post.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/fundamentals',
      name: 'fundamentals',
      component: Fundamentals
    },{
      // change the path to (/<pathname>/:<params>) if you want to use parameters
      // change the path to (/<pathname>) if you want to use query
      // change the path to (/<pathname>/:<params>?) if you want to use optional parameters
      path:'/router/:id?', //-> This is Path
      name: 'router', //-> This is Named View
      component: Router //-> this is View Components
    },{
      path:'/post/:id?',
      name:'post',
      component: Post
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
