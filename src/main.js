import '@babel/polyfill'
// import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css/normalize.css'
// element-ui
import Element from 'element-ui'
import './styles/index.scss'
import 'element-ui/lib/theme-chalk/index.css'
import './components/ScrollView'
import './permission'
import ThemeColor from '@/utils/changeTheme'
import './directive'
Vue.use(Element, {
  size: 'small',
  zIndex: 3000
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    const color = store.getters.themeColor
    ThemeColor.changeTheme(color, false)
  }
}).$mount('#app')
