import { createBrowserRouter } from 'react-router-dom'
import Root from './components/root'
import Icon from './pages/icon/base-icon'
import Input from './pages/input'

const routes = [
  { path: '/', Component: Root },
  { path: '/icon', Component: Icon },
  { path: '/input', Component: Input },
]

const router = createBrowserRouter(routes)

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose())
}

export default router
