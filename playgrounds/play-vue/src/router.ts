import { createRouter, createWebHashHistory } from 'vue-router'
import Root from './components/Root.vue'
import Icon from './pages/icon/base-icon.vue'

const routes = [
  { path: '/', component: Root },
  { path: '/icon', component: Icon },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
