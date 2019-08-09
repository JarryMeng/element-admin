// 滚动条美化指令
import Vue from 'vue'
import store from '../store'

import PerfectScrollbar from 'perfect-scrollbar'
import "perfect-scrollbar/css/perfect-scrollbar.css"
const addScrollBar = (el) => {
  if (el.__ScrollBar__ instanceof PerfectScrollbar) {
    el.__ScrollBar__.update();
  } else {
    el.__ScrollBar__ = new PerfectScrollbar(el)
  }
}
var ScrollBeautify = {}
ScrollBeautify.install = function(Vue) {
  Vue.directive('scrollBeautify', {
    inserted: function(el, binding, vnode) {
      const {
        arg
      } = binding
      if (arg === 'table') {
        const contentEl = el.querySelector(".el-table__body-wrapper")
        console.log(contentEl.parentNode.style)
        if (!contentEl) {
          return console.warn("未发现className为el-table__body-wrapper的dom")
        }
        addScrollBar(contentEl)
      } else {
        addScrollBar(el)
      }
    },
    update(el) {
      el.__ScrollBar__ && el.__ScrollBar__.update()
    },
    componentUpdated(el, binding, vnode) {
      vnode.context.$nextTick(
        () => {
          const {
            arg
          } = binding
          try{
            if (arg === 'table') {
              const contentEl = el.querySelector(".el-table__body-wrapper")
              addScrollBar(contentEl)
            }else{
              addScrollBar(el)
            }
          }catch (e){
            console.log(e)
          }
        }
      )
    },
    unbind: function(el) {
      el.__ScrollBar__ && el.__ScrollBar__.destroy()
      el.__ScrollBar__ = null
    }
  })
}
export default ScrollBeautify
