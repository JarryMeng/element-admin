<template lang="html">
  <el-menu
    ref="navbarMenu"
    :class="['app-sidebar-menu',theme,`menu-mode-${mode}`]"
    :default-active="$route.path"
    :mode="mode"
    :menu-trigger="trigger"
    :collapse="collapse">
    <MenuItem ref="navbarMenuItem" v-for="(route,index) in authRoutes" :key="index" :item="route" />
  </el-menu>
</template>
<script>
import {
  mapGetters
} from 'vuex'
import MenuItem from './MenuItem'
// import {
//   throttle
// } from '@/utils'
// menu菜单 承载其他超出菜单块的宽度
// const OTHER_MENU = 80
// 原始routerList 带 元素宽度
// let routeList = []
export default {
  props: {
    mode: {
      type: String,
      default: 'vertical'
    },
    trigger: {
      type: String,
      default: 'click'
    }
  },
  data() {
    return {
      authRouteList: []
    }
  },
  components: {
    MenuItem
  },
  computed: {
    ...mapGetters(['sidebar', 'theme', 'contentWidth', 'authRoutes']),
    collapse() {
      // 横向菜单时  子项 不缩小
      if (this.mode === 'horizontal') {
        return false
      }
      return !this.sidebar
    }
  },
  watch: {
    // contentWidth(val) {
    //   // 鉴于DOM渲染异步 先这样凑合吧
    //   setTimeout(this.horizontalResizeMenu, 500)
    // }
  },
  mounted() {
    // this.authRouteList = this.authRoutes
    // this.$nextTick(this.horizontalMenuItemWidth)
  },
  beforeDestroy() {
    // if (this._menuResize) {
    //   window.removeEventListener('resize', this._menuResize)
    //   this._menuResize = null
    // }
  }
  // methods: {
  //   horizontalMenuItemWidth() {
  //     if (this.mode === 'horizontal') {
  //       // 生成原始菜单带宽度
  //       routeList = this.$refs.navbarMenuItem.map((item, i) => {
  //         let routeItem = Object.assign({}, this.authRouteList[i])
  //         routeItem.width = item.$el.offsetWidth
  //         return routeItem
  //       })
  //       this.horizontalResizeMenu()
  //       this._menuResize = throttle(this.horizontalResizeMenu.bind(this))
  //       window.addEventListener('resize', this._menuResize)
  //
  //     }
  //   },
  //   // topbar 根据宽度 修改menu结构
  //   horizontalResizeMenu() {
  //     let menuEl = this.$el
  //     let menuAllWidth = 0
  //     // 展示在菜单上的
  //     let showMenuList = []
  //     // 超出放在其他里的
  //     let otherMenuList = []
  //     for (let i = 0; i < routeList.length; i++) {
  //
  //       menuAllWidth += routeList[i].width
  //       // 超出
  //       if (menuEl.offsetWidth - OTHER_MENU < menuAllWidth) {
  //         showMenuList = routeList.slice(0, i)
  //         otherMenuList = routeList.slice(i, routeList.length)
  //         break;
  //       }
  //     }
  //     if (menuAllWidth < menuEl.offsetWidth) {
  //       showMenuList = routeList
  //     }
  //     otherMenuList.length && showMenuList.push({
  //       path: '',
  //       meta: {
  //         title: '...'
  //       },
  //       children: otherMenuList
  //     })
  //     this.authRouteList = showMenuList
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.app-sidebar-menu {

    border-right: 0;
    transition: background 0.18s linear;
    background: transparent;
    // &.dark {
    //     background: transparent;
    // }
    // &.light {
    //     background: #fff;
    // }
    &.menu-mode-horizontal {
        height: $navbar-height;
        border-bottom: 0 !important;
        word-break: normal;
        white-space: nowrap;
    }
    &.menu-mode-vertical {
        padding: 16px 0;
        width: $sidebar-collapse-width;
        &:not(.el-menu--collapse) {
            width: $sidebar-width;
        }
    }
}
</style>
