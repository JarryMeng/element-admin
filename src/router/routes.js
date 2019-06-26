import Layout from '@/views/Layout'
import Login from '@/views/Login'

// 静态路由
export const constantRoutes = [{
  path: '/login',
  name: 'Login',
  meta: {
    title: '登录'
  },
  component: Login
}]

// 权限路由
export const authRoutes = [{
  path: '/',
  component: Layout,
  // redirect: '/home',
  meta: {
    title: '首页'
  },
  children: [{
    path: '/home',
    component: () => import('@/views/Home'),
    name: 'Home',
    meta: {
      title: '首页',
      icon: 'home',
      affix: true
    }
  }]
}, {
  path: '/list',
  component: Layout,
  // redirect: '/home',
  meta: {
    title: '列表页'
  },
  children: [{
    path: '/list/list1',
    component: () => import('@/views/Home'),
    name: 'List1',
    meta: {
      title: '列表1',
      icon: 'list1',
      affix: true
    }
  }, {
    path: '/list/list2',
    component: () => import('@/views/Home'),
    name: 'List2',
    meta: {
      title: '列表2',
      icon: 'list2',
      affix: true
    }
  }, {
    path: '/list/list3',
    component: () => import('@/views/Home'),
    name: 'List2',
    meta: {
      title: '列表3',
      icon: 'list3',
      affix: true
    }
  }]
}]
export default constantRoutes
