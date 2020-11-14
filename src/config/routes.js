import Home from '@/pages/home'
import Login from '@/pages/login'
import Page404 from '@/pages/404'
import Test from '@/pages/test'
import Test1 from '@/pages/test1'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    exact: true,
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/test',
    name: 'Test',
    component: Test,
  },
  {
    path: '/test1',
    name: 'Test1',
    component: Test1,
  },
  {
    path: '/404',
    name: 'Page404',
    component: Page404,
  },
]

export default routes
