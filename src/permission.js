import router from './router'
import store from './store'
import {
  Message
} from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'
import {
  getToken
} from '@/utils/auth'
import {
  setDocumentTitle,
  getPageTitle
} from '@/utils/documentTitle'
// NProgress Configuration
NProgress.configure({
  showSpinner: false
})
// 未登录  页面白名单
const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  NProgress.start()
  // 设置系统标题  pageTitle-documentTitle
  setDocumentTitle(getPageTitle(to.meta.title))

  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      // 如果有token已登陆  跳到主页
      next({
        path: '/'
      })
      NProgress.done()
    } else {
      next()
      // 简单的判断逻辑  用户权限菜单是生成好
      // 用户菜单
      if (!store.getters.authRoutes.length) {
        const routes = await store.dispatch('permission/getMenuList').catch(err => {
          console.log(err)
        })
        console.log(routes)
        // 添加权限路由
        router.addRoutes(routes)
        next({
          ...to,
          replace: true
        })
      }
      //     await store.dispatch('user/resetToken')
      //     Message.error(error || 'Has Error')
      //     next(`/login?redirect=${to.path}`)
      //     NProgress.done()
    }
  } else {
    // 无token
    // 跳转到无权限验证页面
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
