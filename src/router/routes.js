/* eslint-disable */
import Layout from '@/views/Layout'
import Login from '@/views/Login'
import Page404 from '@/views/Other/404.vue'
import Page401 from '@/views/Other/401.vue'
// 静态路由
export const constantRoutes = [{
  path: '/login',
  name: 'Login',
  meta: {
    title: '登录'
  },
  component: Login
}]

// 权限路由  请确保 name 不重复
export const authRoutes = [{
  path: '/',
  component: Layout,
  name: 'Index',
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
  name: 'MapBox',
  meta: {
    title: 'Mapbox',
    icon: 'el-icon-menu'
  },
  children: [{
    path: '/mapbox/default',
    component: () => import('@/views/MapBoxView/Default'),
    name: 'MapBoxDefault',
    meta: {
      title: '默认',
      icon: 'el-icon-location'
    }
  }, {
    path: '/mapbox/customMap',
    component: () => import('@/views/MapBoxView/CustomMap'),
    name: 'MapBoxCustomMap',
    meta: {
      title: '自定义',
      icon: 'el-icon-location'
    }
  }]
}, {
  path: '/list',
  component: Layout,
  name: 'List',
  meta: {
    title: '列表页',
    icon: 'el-icon-menu'
  },
  children: [{
    path: '/list/list1',
    component: () => import('@/views/List'),
    name: 'ListList1',
    meta: {
      title: '列表1',
      icon: 'el-icon-location'
    },
    children: [{
        path: '/list/list1/list11',
        component: () => import('@/views/List/List1'),
        name: 'ListList1List11',
        meta: {
          title: '列表1-1',
          icon: 'el-icon-location'
        }
      },
      {
        path: '/list/list1/list12',
        component: () => import('@/views/Home'),
        name: 'ListList1List12',
        meta: {
          title: '列表1-2',
          icon: 'el-icon-location'
        }
      }
    ]
  }, {
    path: '/list/list2',
    component: () => import('@/views/Home'),
    name: 'ListList2',
    meta: {
      title: '列表2',
      icon: 'el-icon-location'
    }
  }, {
    path: '/list/list3',
    component: () => import('@/views/Home'),
    name: 'ListList3',
    meta: {
      title: '列表3',
      icon: 'el-icon-location'
    }
  }]
}, {
  path: '/echarts',
  component: Layout,
  name: 'Echarts',
  meta: {
    title: 'Echarts',
    icon: 'el-icon-menu'
  },
  children: [{
    path: '/echarts/line',
    component: () => import('@/views/Echarts/Line'),
    name: 'EchartsLine',
    meta: {
      title: '折线图',
      icon: 'el-icon-location'
    }
  }, {
    path: '/echarts/Bar',
    component: () => import('@/views/Echarts/Bar'),
    name: 'EchartsBar',
    meta: {
      title: '柱状图',
      icon: 'el-icon-location'
    }
  }]
}, {
  path: '/links',
  component: Layout,
  name: 'Links',
  meta: {
    title: '链接',
    icon: 'el-icon-menu'
  },
  children: [{
    path: 'https://www.baidu.com/',
    name: 'LinksExternalLinks',
    meta: {
      title: '外链',
      icon: 'el-icon-location'
    }
  }, {
    path: location.origin + '/largeScreen',
    name: 'LinksLargeScreen',
    meta: {
      title: '大屏',
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
      path: '/error/401',
      name: 'error401',
      meta: {
        title: '401'
      },
      component: Page401
    }]
  },
  {
    path: '/401',
    name: '401',
    meta: {
      title: '401'
    },
    component: Page401
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
