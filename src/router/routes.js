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
  meta: {
    title: '首页',
    icon: 'el-icon-menu'
  },
  children: [{
    path: '/home',
    component: () => import('@/views/Home'),
    name: 'Home',
    meta: {
      title: '首页',
      icon: 'el-icon-location'
    }
  }]
}, {
  path: '/list',
  component: Layout,
  meta: {
    title: '列表页',
    icon: 'el-icon-menu'
  },
  children: [{
    path: '/list/list1',
    component: () => import('@/views/Home'),
    name: 'List1',
    meta: {
      title: '列表1',
      icon: 'el-icon-location'
    }
  }, {
    path: '/list/list2',
    component: () => import('@/views/Home'),
    name: 'List2',
    meta: {
      title: '列表2',
      icon: 'el-icon-location'
    }
  }, {
    path: '/list/list3',
    component: () => import('@/views/Home'),
    name: 'List3',
    meta: {
      title: '列表3',
      icon: 'el-icon-location'
    }
  }]
}]
export default constantRoutes
