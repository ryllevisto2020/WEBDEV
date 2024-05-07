import { createRouter, createWebHistory } from 'vue-router'
import Register from "../src/components/Register.vue"

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/register',
      components: {
        default: Register,
      },
    },
  ],
})
