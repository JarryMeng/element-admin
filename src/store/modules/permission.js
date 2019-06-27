import {
  authRoutes,
  constantRoutes
} from '../../router/routes'
import router from '@/router'
import {
  SET_ROUTES,
  REMOVE_ROUTES
} from '../mutation-types'
import {
  menuList
} from '@/api/user'
// 深拷贝  解决 vuex mutations 修改state问题
const deepCopy = function(source) {
  if (!source) {
    return source
  }
  let sourceCopy = source instanceof Array ? [] : {}
  for (let item in source) {
    sourceCopy[item] = typeof source[item] === 'object' ? deepCopy(source[item]) : source[item]
  }
  return sourceCopy
}
// 后台用户路由和定义好的权限路由 匹配
const recursionRouter = (userRoutes = [], authRoutes = []) => {
  let realRoutes = []
  // 系统定义好的all路由
  authRoutes.forEach(authRoute => {
    // 后台返回路由
    userRoutes.forEach(userRoute => {
      if (userRoute.name === authRoute.meta.title) {
        // 有子路由  递归
        if (userRoute.children && userRoute.children.length > 0) {
          authRoute.children = recursionRouter(userRoute.children, authRoute.children)
        }
        realRoutes.push(authRoute)
      }
    })
  })
  return realRoutes
}

const state = {
  routes: [],
  authRoutes: []
}
const mutations = {
  [SET_ROUTES](state, authRoutes) {
    state.authRoutes = authRoutes

    const allRouters = deepCopy(constantRoutes.concat(authRoutes))
    state.routes = allRouters
  },
  [REMOVE_ROUTES](state, authRoutes) {
    state.authRoutes = []
    state.routes = []
  }
}
const actions = {
  async getMenuList({
    commit,
    rootState
  }) {
    const authMenuList = await menuList(rootState.user.userId).then(res => res.menu)
    const authRoutesList = recursionRouter(authMenuList, authRoutes)
    const authMenu = authRoutesList.map((item, index) => {
      if (index === 0) {
        item.path = '/'
        item.redirect = item.children.length ? item.children[0].path : '/'
      }
      return item
    })
    commit(SET_ROUTES, deepCopy(authMenu))
    return authMenu
  },
  removeMenuList({commit}){
    commit(REMOVE_ROUTES)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
