<template lang="html">
  <el-aside class="app-sidebar" :style="styles" :class="[theme,{'fixed-siderbar':fixedSiderbar}]" width="auto">
    <Logo v-if="layoutMode !== 'mergeHeader'" />
    <scroll-view class="sidebar-menu-wrap">
      <Menu mode="vertical" />
    </scroll-view>
  </el-aside>
</template>

<script>
import {
  mapGetters
} from 'vuex'
import Logo from './Logo.vue'
import Menu from './Menu'
import {
  sidebarWidth,
  navbarHeight,
  sidebarCollapseWidth
} from '@/styles/base.scss'
export default {
  components: {
    Logo,
    Menu
  },
  computed: {
    ...mapGetters(['layoutMode', 'theme', 'sidebar', 'fixedSiderbar']),
    styles() {
      // flex: 0 0 ${this.sidebar?'256':'80'}px;
      return `
              max-width: ${this.sidebar? sidebarWidth : sidebarCollapseWidth };
              min-width: ${this.sidebar? sidebarWidth : sidebarCollapseWidth};
              width: ${this.sidebar? sidebarWidth : sidebarCollapseWidth};
              margin-top: ${this.layoutMode === 'mergeHeader'? navbarHeight : '0'};
              `
    }
  }
}
</script>
<style lang="scss">
.app-sidebar {
    .sidebar-menu-wrap {
        overflow: visible !important;
        height: auto !important;
        .el-scrollbar__wrap {
            overflow: visible !important;
        }
    }
    &.fixed-siderbar {
        .sidebar-menu-wrap {
            overflow: hidden !important;
            .el-scrollbar__wrap {
                overflow-x: hidden !important;
            }
        }
    }
}
</style>
<style lang="scss" scoped>
.app-sidebar {
    width: auto !important;
    position: relative;
    z-index: 100;
    // min-height: 100vh;
    display: flex;
    flex-direction: column;
    transition-property: min-width,max-width,background;
    transition-duration: 0.18s;
    transition-timing-function: linear;
    overflow: visible !important;
    .app-logo {
        padding-left: 20px;
    }
    &.light {
        background-color: $light;
        box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);
    }
    &.dark {
        background: $dark;
        box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
    }
    &.fixed-siderbar {
        position: fixed;
        height: 100vh;
        left: 0;
        bottom: 0;
        top: 0;
    }
    .sidebar-menu-wrap {
        flex: 1;
    }

}
</style>
