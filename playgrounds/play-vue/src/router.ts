import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Root from './components/Root.vue'
import Icon from './pages/icon/base-icon.vue'
import Input from './pages/input/index.vue'

const routes = [
  { path: '/', component: Root },
  { path: '/icon', component: Icon },
  { path: '/input', component: Input },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
