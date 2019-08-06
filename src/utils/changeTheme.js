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
  static async changeTheme(newtheme, noLoading = true) {
    if (process.env.NODE_ENV !== 'production') {
      this.changeThemeStyle(newtheme, noLoading)
    } else {
      this.changeThemeLink(newtheme, noLoading)
    }
  }
  static async changeThemeLink(newtheme, noLoading) {
    const themeColor = stroe.getters.themeColor
    // 生成过样式  读取 store
    const oldVal = this.chalk ? themeColor : ORIGINAL_THEME
    if (typeof newtheme !== 'string') return
    let $message
    if (noLoading) {
      $message = Message({
        message: '正在编译主题...',
        customClass: 'theme-message',
        type: 'success',
        duration: 0,
        iconClass: 'el-icon-loading'
      })
    }
    // 新的颜色集
    const newestCluster = this.getThemeCluster(newtheme.replace('#', ''))
    // 之前的颜色集
    const originalCluster = this.getThemeCluster(oldVal.replace('#', ''))
    // 蓝色的颜色集
    const normalCluster = this.getThemeCluster(ORIGINAL_THEME.replace('#', ''))
    // css分离 link引入 更换逻辑
    if (!this.chalk) {

      const styleLinkTags = {}
      let linkTags = [].slice.call(document.querySelectorAll('link'))
      let linkStyles = []
      linkTags.forEach(link => {
        if (link.href.search(/\.css$/) === -1) return
        const propName = link.href.substr(link.href.lastIndexOf('/') + 1)
        if (styleLinkTags[propName]) return
        styleLinkTags[propName] = link
        linkStyles.push(this.getCSSString(link.href))
      })

      await Promise.all(linkStyles).then(arrData => {
        // console.log(arrData)
        let otherStyleText = ''
        arrData.map(styleText => {
          let styleInnerText = this.updateStyle(styleText, normalCluster, newestCluster)
          otherStyleText += styleInnerText
        })
        let styleTag = document.getElementById('chalk-style')
        if (!styleTag) {
          styleTag = document.createElement('style')
          styleTag.setAttribute('id', 'chalk-style')
          document.head.appendChild(styleTag)
        }
        this.chalk = otherStyleText
        styleTag.innerText = otherStyleText
      })
    } else {
      let newStyleText = this.updateStyle(this.chalk, originalCluster, newestCluster)
      let styleTag = document.getElementById('chalk-style')
      if (!styleTag) {
        styleTag = document.createElement('style')
        styleTag.setAttribute('id', 'chalk-style')
        document.head.appendChild(styleTag)
      }
      this.chalk = newStyleText
      styleTag.innerText = newStyleText
    }
    if ($message) {
      setTimeout(() => {
        $message.close()
      }, 500)
    }
  }
  static async changeThemeStyle(newtheme, noLoading) {
    const themeColor = stroe.getters.themeColor
    // 生成过样式  读取 store
    const oldVal = this.chalk ? themeColor : ORIGINAL_THEME
    if (typeof newtheme !== 'string') return
    let $message
    if (noLoading) {
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
    const getHandler = () => {
      return () => {
        const originalCluster = this.getThemeCluster(ORIGINAL_THEME.replace('#', ''))
        const newStyle = this.updateStyle(this.chalk, originalCluster, newestCluster)

        let styleTag = document.getElementById('chalk-style')
        if (!styleTag) {
          styleTag = document.createElement('style')
          styleTag.setAttribute('id', 'chalk-style')
          document.head.appendChild(styleTag)
        }
        styleTag.innerText = newStyle
      }
    }

    if (!this.chalk) {
      //请求线上资源
      let url = `https://unpkg.com/element-ui@${version}/lib/theme-chalk/index.css`

      this.chalk = await this.getCSSString(url)
    }
    const chalkHandler = getHandler()

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
    setTimeout(() => {
      if ($message) {
        $message.close()
      }
    }, 500)

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
  static getCSSString(url) {
    return new Promise(resolve => {
      const xhr = new XMLHttpRequest()
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const styleText = xhr.responseText.replace(/@font-face{[^}]+}/, '')
          resolve(styleText)
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
