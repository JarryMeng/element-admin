import '@babel/polyfill'
// import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import store from '@/store'
import 'normalize.css/normalize.css'
// element-ui
import Element from 'element-ui'
import '@/styles/index.scss'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element, {
  size: 'small',
  zIndex: 3000
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
