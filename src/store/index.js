import Vue from 'vue'
import Vuex,{ Store } from 'vuex'
import getters from './getters'
import app from './modules/app'
import user from './modules/user'
import permission from './modules/permission'
import tagViews from './modules/tagViews'
Vue.use(Vuex)

export default new Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    app,
    user,
    permission,
    tagViews
  },
  getters
})
