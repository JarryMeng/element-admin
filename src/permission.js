import router from './router'
import store from './store'
// import {
//   Message
// } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'
import {
  getToken
} from '@/utils/auth'
import {
  setDocumentTitle,
  getPageTitle
} from '@/utils/documentTitle'
import {
  authRoutes
} from '@/router/routes'
// import {
//   deepCopy
// } from '@/utils'
// NProgress Configuration
NProgress.configure({
  showSpinner: false
})
// 未登录  页面白名单
const whiteList = ['/login']

function hasRoutePath(routes, path) {
  return routes.some(item => {
    if (item.path === path) {
      return true
    } else {
      return item.children && hasRoutePath(item.children, path)
    }
  })
}
router.beforeEach(async(to, from, next) => {
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
      // 判断  用户权限菜单是生成好
      // 用户路由没有获取
      if (!store.getters.authRoutes.length) {
        // 获取用户权限菜单
        await store.dispatch('permission/getMenuList')
        const {
          query
        } = from
        if (!query.redirect) {
          next({
            ...to,
            replace: true
          })
        } else {
          // store.getters.authRoutes
          // 当前用户有此页面访问权限
          if (hasRoutePath(store.getters.routes, query.redirect)) {
            next({
              path: query.redirect,
              replace: true
            })
          } else {
            // 路由有配置
            if (hasRoutePath(authRoutes, query.redirect)) {
              next({
                path: '/401',
                replace: true
              })
            }

          }

        }

      } else {
        if (hasRoutePath(store.getters.routes, to.path)) {
          next()
        } else {
          if (hasRoutePath(authRoutes, to.path)) {
            next({
              path: '/error/401',
              replace: true
            })
          } else {
            next({
              path: '/error/404',
              replace: true
            })
          }
        }

      }
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
