<template lang="html">
  <el-menu
    ref="navbarMenu"
    :class="['app-sidebar-menu',theme,`menu-mode-${mode}`]"
    :default-active="$route.path"
    :mode="mode"
    :menu-trigger="trigger"
    :collapse="collapse">
    <MenuItem ref="navbarMenuItem" v-for="(route,index) in authRouteList" :key="index" :item="route" />
  </el-menu>
</template>
<script>
import {
  mapGetters
} from 'vuex'
import MenuItem from './MenuItem'
import {
  throttle
} from '@/utils'
// menu菜单 承载其他超出菜单块的宽度
const OTHER_MENU = 80
// 原始routerList 带 元素宽度
let routeList = []
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
      authRouteList: [{
          path: '/',
          meta: {
            title: '首页',
            name: 'home'
          },
          children: []
        },
        {
          path: '/',
          meta: {
            title: '首页',
            name: 'home'
          },
          children: []
        }, {
          path: '/',
          meta: {
            title: '首页',
            name: 'home'
          },
          children: []
        }, {
          path: '/',
          meta: {
            title: '首页',
            name: 'home'
          },
          children: []
        }, {
          path: '/',
          meta: {
            title: '首页',
            name: 'home'
          },
          children: []
        }, {
          path: '/',
          meta: {
            title: '首页',
            name: 'home'
          },
          children: []
        }, {
          path: '/',
          meta: {
            title: '首页',
            name: 'home'
          },
          children: []
        }, {
          path: '/',
          meta: {
            title: '首页',
            name: 'home'
          },
          children: []
        }, {
          path: '/',
          meta: {
            title: '首页',
            name: 'home'
          },
          children: []
        }, {
          path: '/',
          meta: {
            title: '首页',
            name: 'home'
          },
          children: []
        }, {
          path: '/',
          meta: {
            title: '首页',
            name: 'home'
          },
          children: []
        }, {
          path: '/',
          meta: {
            title: '首页',
            name: 'home'
          },
          children: []
        }, {
          path: '/',
          meta: {
            title: '首页',
            name: 'home'
          },
          children: []
        }, {
          path: '/',
          meta: {
            title: '首页',
            name: 'home'
          },
          children: []
        }, {
          path: '/',
          meta: {
            title: '首页',
            name: 'home'
          },
          children: []
        }, {
          path: '/',
          meta: {
            title: '首页',
            name: 'home'
          },
          children: []
        }, {
          path: '/',
          meta: {
            title: '首页',
            name: 'home'
          },
          children: []
        },
        {
          path: '/about',
          meta: {
            title: '关于',
            name: 'about'
          },
          children: [{
              path: '/about1',
              meta: {
                title: '关于',
                name: 'about'
              },
            },
            {
              path: '/about2',
              meta: {
                title: '关于',
                name: 'about'
              },
            }
          ]
        }
      ]
    }
  },
  components: {
    MenuItem
  },
  computed: {
    ...mapGetters(['sidebar', 'theme', 'authRoutes']),
    collapse() {
      // 横向菜单时  子项 不缩小
      if (this.mode === 'horizontal') {
        return false
      }
      return !this.sidebar
    }
  },
  mounted() {
    // 生成原始菜单带宽度
    routeList = this.$refs.navbarMenuItem.map((item, i) => {
      let routeItem = Object.assign({}, this.authRouteList[i])
      console.log(routeItem)
      routeItem.initialWidth = item.$el.offsetWidth
      return routeItem
    })
    // console.log(routeList)
    this.horizontalResizeMenu()
    window.addEventListener('resize', throttle(this.horizontalResizeMenu.bind(this)))

  },
  methods: {
    // menuItemReady(menuItem) {
    //   stepWidth += menuItem.$el.offsetWidth
    //   stepRouteList.push({
    //     ...menuItem.item,
    //     width: menuItem.$el.offsetWidth,
    //     stepWidth: stepWidth
    //   })
    // },
    // topbar 根据宽度 修改menu结构
    horizontalResizeMenu() {
      let menuEl = this.$refs.navbarMenu.$el
      let menuAllWidth = 0
      // 展示在菜单上的
      let showMenuList = []
      // 超出放在其他里的
      let otherMenuList = []
      for (let i = 0; i < routeList.length; i++) {

        menuAllWidth += routeList[i].initialWidth
        // 超出
        if (menuEl.offsetWidth - OTHER_MENU < menuAllWidth) {
          // console.log(i)
          showMenuList = routeList.slice(0, i)
          otherMenuList = routeList.slice(i, routeList.length)
          break;
        }
      }
      showMenuList.push({
        path: '',
        meta:{
          title:'...',
          name:'...'
        },
        children: otherMenuList
      })
      // console.log(showMenuList)
      this.authRouteList = showMenuList
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';
.app-sidebar-menu {

    border-right: 0;
    transition: background 0.18s linear;
    &.dark {
        background: #001529;
    }
    &.light {
        background: #fff;
    }
    &.menu-mode-horizontal {
        height: $navbar-height;
        border-bottom: 0 !important;
        word-break: normal;
        white-space: nowrap;
        overflow: hidden;
    }
    &.menu-mode-vertical {
        padding: 16px 0;
        width: 80px;
        &:not(.el-menu--collapse) {
            width: $sidebar-width;
        }
    }
}
</style>
