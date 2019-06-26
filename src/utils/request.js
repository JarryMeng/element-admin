import Vue from 'vue'
import axios from 'axios'
import store from '@/store'
import { Message } from 'element-ui'
import { TokenKey, getToken } from './auth'
// 暴露 mock 请求
export { mock } from './mockRequest'
// create an axios instance
const request = axios.create({
  baseURL: process.env.VUE_APP_URL, // api 的 VUE_APP_URL
  timeout: 10000 // request timeout
})

// request interceptor
request.interceptors.request.use(
  config => {
    if (store.getters.token) {
      // 让每个请求携带token
      config.headers[TokenKey] = getToken()
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
request.interceptors.response.use(
  response => {
    const res = response.data
    if (!res.resultFlag) {
      Message({
        message: res.errorCode || res.message,
        type: 'error',
        duration: 5 * 1000
      })
      // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // 请自行在引入 MessageBox
        // import { Message, MessageBox } from 'element-ui'
        MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
          confirmButtonText: '重新登录',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          store.dispatch('FedLogOut').then(() => {
            location.reload() // 为了重新实例化vue-router对象 避免bug
          })
        })
      }
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
Vue.prototype.$http = request

export default request
