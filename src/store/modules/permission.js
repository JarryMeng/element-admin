import {
  authRoutes,
  // constantRoutes,
  othenRoutes
} from '../../router/routes'
import router from '@/router'
import {
  SET_ROUTES,
  REMOVE_ROUTES
} from '../mutation-types'
import {
  menuList
} from '@/api/user'
// 深拷贝  解决 vuex strict模式下 mutations 外 修改state问题
import {
  deepCopy
} from '@/utils'

// 后台用户路由和定义好的权限路由 匹配
const recursionRouter = (userRoutes = [], authRoutes = []) => {
  let realRoutes = []
  // 系统定义好的all路由
  authRoutes.forEach(authRoute => {
    // 后台返回路由
    userRoutes.forEach(userRoute => {
      // 系统定义好的all路由只有一个子项
      if (authRoute.children && authRoute.children.length === 1) {
        // 后台返回路由 直接和 子项匹配
        const [onlyChild] = authRoute.children
        if (userRoute.name === onlyChild.name) {
          realRoutes.push(authRoute)
          return
        }
      }
      // 后台 name 和 前台 name做匹配
      if (userRoute.name === authRoute.name) {
        // 有子路由  递归
        if (userRoute.children && userRoute.children.length && authRoute.children && authRoute.children.length) {
          authRoute.children = recursionRouter(userRoute.children, authRoute.children)
        }
        realRoutes.push(authRoute)
      }
    })
  })
  return realRoutes
}

const state = {
  routes: [], // 除constantRoutes之外的 路由信息 用户 authRoutes + othenRoutes 用于addRoutes
  authRoutes: [] // 用户权限菜单路由
}
const mutations = {
  [SET_ROUTES](state, authRoutes) {
    state.authRoutes = deepCopy(authRoutes)
    state.routes = deepCopy([...authRoutes, ...othenRoutes])
  },
  [REMOVE_ROUTES](state) {
    state.authRoutes = []
    state.routes = []
  }
}
const actions = {
  async getMenuList({
    commit,
    rootState
  }) {
    // 请求用户菜单
    const authMenuList = await menuList(rootState.user.userId).then(res => res.menu)
    // 匹配用户权限菜单
    const authRoutesList = recursionRouter(authMenuList, authRoutes)
    console.log(authRoutesList)
    // 寻找首页path
    const getRouteHomePath = routes => {
      if (routes.children && routes.children.length) {
        return getRouteHomePath(routes.children[0])
      } else {
        return routes.path
      }
    }
    // 将第一个路由设置成首页 默认进入页
    const authMenuRoutes = authRoutesList.map((item, index) => {
      if (index === 0) {
        item.path = '/'
        item.redirect = getRouteHomePath(item)
      }
      return item
    })
    // 添加权限路由
    router.addRoutes([...authMenuRoutes, ...othenRoutes])
    commit(SET_ROUTES, authMenuRoutes)
  },
  removeMenuList({
    commit
  }) {
    commit(REMOVE_ROUTES)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
