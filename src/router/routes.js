import Layout from '@/views/Layout'
import Login from '@/views/Login'
import Page404 from '@/views/Other/404Page.vue'
import NoPermission from '@/views/Other/NoPermission.vue'
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
  path: '/mapbox',
  component: Layout,
  meta: {
    title: 'Mapbox',
    icon: 'el-icon-menu'
  },
  children: [{
    path: '/mapbox/default',
    component: () => import('@/views/MapBoxView/Default'),
    name: 'Mapbox',
    meta: {
      title: 'Mapbox',
      icon: 'el-icon-location'
    }
  }, {
    path: '/mapbox/mineData',
    component: () => import('@/views/MapBoxView/MineDataMap'),
    name: 'MineData',
    meta: {
      title: 'MineData',
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
export const othenRoutes = [{
    path: '/error',
    component: Layout,
    meta: {
      title: '404'
    },
    children: [{
      path: '/error/404',
      name: 'error404',
      meta: {
        title: '404'
      },
      component: Page404
    }, {
      path: '/error/noPermission',
      name: 'errorNoPermission',
      meta: {
        title: '无访问权限'
      },
      component: NoPermission
    }]
  },
  {
    path: '/noPermission',
    name: 'noPermission',
    meta: {
      title: '无访问权限'
    },
    component: NoPermission
  }, {
    path: '/404',
    name: '404',
    meta: {
      title: '404'
    },
    component: Page404
  }
]
export default constantRoutes
