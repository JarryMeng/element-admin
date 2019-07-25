import Cookie from 'js-cookie'
import { resetRouter } from '@/router'
import {
  SET_ACCESS_TOKEN,
  SET_USERNAME,
  SET_USERID,
  SET_ROLEID
} from '../mutation-types'
import {
  getToken,
  setToken,
  removeToken
} from '@/utils/auth'
import {
  userLogin
} from '@/api/user'
const state = {
  token: getToken(),
  userId: Cookie.get('userId'),
  userName: Cookie.get('userName'),
  roleId: Cookie.get('roleId'),
}
const mutations = {
  [SET_ACCESS_TOKEN](state, token) {
    setToken(token)
    state.token = token
  },
  [SET_USERNAME](state, userName) {
    Cookie.set('userName', userName)
    state.userName = userName
  },
  [SET_USERID](state, userId) {
    Cookie.set('userId', userId)
    state.userId = userId
  },
  [SET_ROLEID](state, roleId) {
    Cookie.set('roleId', roleId)
    state.roleId = roleId
  }
}
const actions = {
  async userLogin({
    commit
  }, userInfo) {
    let userMsg = await userLogin(userInfo)
    console.log(userMsg)
    commit(SET_ACCESS_TOKEN, userMsg.token)
    commit(SET_USERNAME, userMsg.username)
    commit(SET_USERID, userMsg.userid)
    commit(SET_ROLEID, userMsg.roleid)
    return userMsg
  },
  async userLogout({
    commit,
    dispatch
  }) {
    dispatch('permission/removeMenuList', null, { root: true })
    dispatch('tagViews/delAllView', null, { root: true })
    commit(SET_ACCESS_TOKEN, '')
    removeToken()
    resetRouter()
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
