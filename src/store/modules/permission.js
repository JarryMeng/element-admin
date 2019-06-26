import {
  authRoutes,
  constantRoutes
} from '../../router/routes'
import router from '@/router'
import {
  SET_ROUTES
} from '../mutation-types'
import { menuList } from '@/api/user'
// 深拷贝
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
const recursionRouter = (userRoutes = [], authRoutes = [])=>{
  let realRoutes = []
  // 系统定义好的all路由
  authRoutes.forEach(authRoute=>{
    // 后台返回路由
    userRoutes.forEach(userRoute=>{
      if (userRoute.name === authRoute.meta.title) {
        // 有子路由  递归
        if(userRoute.children && userRoute.children.length > 0){
          authRoute.children = recursionRouter(userRoute.children,authRoute.children)
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
  }
}
const actions = {
  async getMenuList({ commit }){
    const menuData = await menuList().then(res=>res.data)
    const authRoutesList = recursionRouter(menuData, authRoutes)
    commit(SET_ROUTES,deepCopy(authRoutesList))
    return authRoutesList
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
