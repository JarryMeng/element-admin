// 权限内容控制指令
import Vue from 'vue'
import store from '../store'
var Permission = {}
Permission.install = function(Vue) {
  // import Cookies from 'js-cookie'
  Vue.directive('permission', {
    inserted: function(el, binding, vnode) {
      const userId = store.getters.userId
      if (userId != '1') {
        el.parentNode.removeChild(el)
      }
    }
  })
}
export default Permission
