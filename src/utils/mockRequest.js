import Vue from 'vue'
import axios from 'axios'
import store from '@/store'
import {
  Message
} from 'element-ui'
import { TokenKey, getToken } from './auth'
// 获取当前启动服务页面访问地址
const locationObj = window.location
const pathname = locationObj.pathname.substr(0, locationObj.pathname.lastIndexOf('/'))
const locationPath = locationObj.protocol + '//' + locationObj.host + pathname

export const mock = axios.create({
  baseURL: `${locationPath}/mock`, // api 的 VUE_APP_URL
  timeout: 10000 // request timeout
})

mock.interceptors.request.use(
  config => {
    if (store.getters.token) {
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
mock.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code != 200) {
      Message({
        message: res.errorCode || res.message,
        type: 'error',
        duration: 5 * 1000
      })
      return Promise.reject('error')
    } else {
      // 如果启用分页查询 返回总页数
      const total = Number(response.headers['x-total-count'])
      return total ? {
        total,
        ...response.data
      } : {
        ...response.data
      }
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
