import Cookies from 'js-cookie'
// 根据时间获取问候语
export function timeFix() {
  const time = new Date()
  const hour = time.getHours()
  return hour < 9 ? '早上好' : hour <= 11 ? '上午好' : hour <= 13 ? '中午好' : hour < 20 ? '下午好' : '晚上好'
}
/**
 * [storage 方法]
 * get('key') 获取
 * set('key','value') 设置
 * remove('key') 删除
 * clear()  清空
 */
export const storage = (() => {
  if (!window.localStorage) {
    throw new Error('您的浏览器不支持localStorage')
    return
  }
  return {
    set(key, val) {
      localStorage.setItem(key, val)
    },
    get(key) {
      let keyVal
      // JSON.parse方法 字符串数子 转换 为数字
      try {
        keyVal = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : ''
      } catch (e) {
        keyVal = localStorage.getItem(key)
      }
      return keyVal
    },
    remove(key) {
      localStorage.removeItem(key)
    },
    clear() {
      localStorage.clear()
    }
  }
})()
/**
 * [getQueryObject 获取地址栏参数]
 * @param  {[type]} url [url地址]
 * @return {[object]}     [返回 url包含的 所有参数 对象键值对]
 */
export function getQueryObject(url) {
  url = url == null ? window.location.href : url
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj = {}
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}
//防抖debounce代码：
export function debounce(fn, timer = 500) {
  let timeout = null; // 创建一个标记用来存放定时器的返回值
  return function() {
    // 每当用户输入的时候把前一个 setTimeout clear 掉
    clearTimeout(timeout);
    // 然后又创建一个新的 setTimeout, 这样就能保证interval 间隔内如果时间持续触发，就不会执行 fn 函数
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, timer);
  };
}
//节流throttle代码：
export function throttle(fn, timer = 500) {
  let canRun = true; // 通过闭包保存一个标记
  return function() {
    // 在函数开头判断标记是否为true，不为true则return
    if (!canRun) return;
    // 立即设置为false
    canRun = false;
    // 将外部传入的函数的执行放在setTimeout中
    setTimeout(() => {
      // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。
      // 当定时器没有执行的时候标记永远是false，在开头被return掉
      fn.apply(this, arguments);
      canRun = true;
    }, timer);
  };
}
/**
 * [deepCopy 深拷贝]
 * @param  {[Object,Array]} source [对象或数组]
 * @return {[Object,Array]}        [返回相应深拷贝值]
 */
export const deepCopy = function(source) {
  if (!source) {
    return source
  }
  let sourceCopy = source instanceof Array ? [] : {}
  for (let item in source) {
    sourceCopy[item] = typeof source[item] === 'object' ? deepCopy(source[item]) : source[item]
  }
  return sourceCopy
}
