// 借鉴于vue-element-admin
import {
  Message
} from 'element-ui'
import stroe from '@/store'
import {
  version
} from 'element-ui/package.json'
const ORIGINAL_THEME = '#409EFF' // default color
export default class ThemeColor {
  static chalk = ''
  static async changeTheme(newtheme,noLoading=true) {
    const themeColor = stroe.getters.themeColor
    // 生成过样式  读取 store
    const oldVal = this.chalk ? themeColor : ORIGINAL_THEME
    if (typeof newtheme !== 'string') return
    let $message
    if(noLoading){
      $message = Message({
        message: '正在编译主题...',
        customClass: 'theme-message',
        type: 'success',
        duration: 0,
        iconClass: 'el-icon-loading'
      })
    }

    const newestCluster = this.getThemeCluster(newtheme.replace('#', ''))
    const originalCluster = this.getThemeCluster(oldVal.replace('#', ''))
    // 根据最新的样式文本生成style标签 放到head
    const getHandler = (variable, id) => {
      return () => {
        const originalCluster = this.getThemeCluster(ORIGINAL_THEME.replace('#', ''))
        const newStyle = this.updateStyle(this[variable], originalCluster, newestCluster)

        let styleTag = document.getElementById(id)
        if (!styleTag) {
          styleTag = document.createElement('style')
          styleTag.setAttribute('id', id)
          document.head.appendChild(styleTag)
        }
        styleTag.innerText = newStyle
      }
    }

    if (!this.chalk) {
      let url = ''
      // 开发环境 请求线上资源
      if (process.env.NODE_ENV !== 'production') {
        url = `https://unpkg.com/element-ui@${version}/lib/theme-chalk/index.css`
      } else {
        url = './defaultTheme/index.css'
      }
      await this.getCSSString(url, 'chalk')
    }
    const chalkHandler = getHandler('chalk', 'chalk-style')

    chalkHandler()
    // style标签副本 匹配所有样式 替换颜色
    const styles = [].slice.call(document.querySelectorAll('style'))
      .filter(style => {
        const text = style.innerText
        return new RegExp(oldVal, 'i').test(text) && !/Chalk Variables/.test(text)
      })
    styles.forEach(style => {
      const {
        innerText
      } = style
      if (typeof innerText !== 'string') return
      style.innerText = this.updateStyle(innerText, originalCluster, newestCluster)
    })
    setTimeout(()=>{
      if($message){
        $message.close()
      }
    },500)

  }
  // 样式文本 正则匹配替换 更新颜色
  static updateStyle(style, oldCluster, newCluster) {
    let newStyle = style
    oldCluster.forEach((color, index) => {
      newStyle = newStyle.replace(new RegExp(color, 'ig'), newCluster[index])
    })
    return newStyle
  }
  // 请求地址样式资源
  static getCSSString(url, variable) {
    return new Promise(resolve => {
      const xhr = new XMLHttpRequest()
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          this[variable] = xhr.responseText.replace(/@font-face{[^}]+}/, '')
          resolve()
        }
      }
      xhr.open('GET', url)
      xhr.send()
    })
  }

  static getThemeCluster(theme) {
    const tintColor = (color, tint) => {
      let red = parseInt(color.slice(0, 2), 16)
      let green = parseInt(color.slice(2, 4), 16)
      let blue = parseInt(color.slice(4, 6), 16)

      if (tint === 0) { // when primary color is in its rgb space
        return [red, green, blue].join(',')
      } else {
        red += Math.round(tint * (255 - red))
        green += Math.round(tint * (255 - green))
        blue += Math.round(tint * (255 - blue))

        red = red.toString(16)
        green = green.toString(16)
        blue = blue.toString(16)

        return `#${red}${green}${blue}`
      }
    }

    const shadeColor = (color, shade) => {
      let red = parseInt(color.slice(0, 2), 16)
      let green = parseInt(color.slice(2, 4), 16)
      let blue = parseInt(color.slice(4, 6), 16)

      red = Math.round((1 - shade) * red)
      green = Math.round((1 - shade) * green)
      blue = Math.round((1 - shade) * blue)

      red = red.toString(16)
      green = green.toString(16)
      blue = blue.toString(16)

      return `#${red}${green}${blue}`
    }

    const clusters = [theme]
    for (let i = 0; i <= 9; i++) {
      clusters.push(tintColor(theme, Number((i / 10).toFixed(2))))
    }
    clusters.push(shadeColor(theme, 0.1))
    return clusters
  }
}