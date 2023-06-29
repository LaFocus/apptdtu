import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
function load(component) {
  return () => import(`@/views/${component}.vue`)
}
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/process',
      name: 'Process',
      component: load('Process')
    },
    {
      path: '/baccalaureate',
      name: 'Baccalaureate',
      component: load('Baccalaureate')
    },
    {
      path: '/magistracy',
      name: 'Magistracy',
      component: load('Magistracy')
    },
  ]
})

export default router
