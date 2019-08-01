//  用于非主页面的 路由权限

// 看需求是是否需要权限访问 在做配置

import router from './router'
import store from './store'

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

NProgress.configure({
  showSpinner: false
})

router.beforeEach(async (to, from, next) => {
  NProgress.start()

})

router.afterEach(() => {
  NProgress.done()
})
