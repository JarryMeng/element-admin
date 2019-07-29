<template lang="html">
  <el-menu
    ref="navbarMenu"
    :class="['app-sidebar-menu',theme,`menu-mode-${mode}`]"
    :default-active="$route.path"
    :mode="mode"
    :menu-trigger="trigger"
    :collapse="collapse">
    <MenuItem ref="menuItem" v-for="(route,index) in menuList" :key="index" :item="route" />
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
const OTHER_MENU = 80
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
      default: 'hover'
    }
  },
  data() {
    return {
      resizeMenuList: []
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
    },
    menuList() {
      if (this.resizeMenuList.length) {
        return this.resizeMenuList
      }
      return this.authRoutes
    }
  },
  watch: {
    // contentWidth(val) {
    //   // 鉴于DOM渲染异步 先这样凑合吧
    //   setTimeout(this.horizontalResizeMenu, 500)
    // }
  },
  mounted() {
    if (this.mode === 'horizontal') {
      const menuItemList = this.getMenuItemListWithWidth()
      this.menuWidthResize = () => {
        const navbarMenu = this.$refs.navbarMenu
        const menuWidth = navbarMenu.$el.clientWidth
        // 截取索引
        let cutOutIndex = 0
        // OTHER_MENU
        for (let i = 0; i < menuItemList.length; i++) {
          if (menuItemList[i].stepWidth > (menuWidth - OTHER_MENU)) {
            cutOutIndex = i
            break
          }
        }
        console.log(cutOutIndex)
        let showMenuList = []
        let hideMenuList = []
        if (cutOutIndex > 0) {
          showMenuList = menuItemList.slice(0, cutOutIndex)
          hideMenuList = menuItemList.slice(cutOutIndex)

          this.resizeMenuList = [
            ...showMenuList,
            {
              children: hideMenuList,
              path: '',
              meta: {
                title: '...'
              }
            }
          ]
          console.log(this.resizeMenuList)
        } else {

          this.resizeMenuList = []
          console.log(this.resizeMenuList)
        }


      }
      this.menuWidthResize()
      window.addEventListener('resize', this.menuWidthResize)
    }
  },
  beforeDestroy() {
    this.menuWidthResize && window.removeEventListener('resize', this.menuWidthResize)
  },
  methods: {
    getMenuItemListWithWidth() {
      // 阶梯宽度
      let stepWidth = 0
      // 把菜单子项 + dom宽度
      const menuItemList = this.$refs.menuItem.map(menuItem => {
        const clientWidth = menuItem.$el.clientWidth
        stepWidth += clientWidth
        return {
          ...menuItem.item,
          clientWidth,
          stepWidth
        }
      })
      return menuItemList
    }

  }
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
        // word-break: normal;
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
