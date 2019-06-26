<template lang="html">
  <el-aside class="app-sidebar" :style="styles" :class="[theme,{'fixed-siderbar':fixedSiderbar}]" width="auto">
    <Logo />
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
export default {
  components: {
    Logo,
    Menu
  },
  computed: {
    ...mapGetters(['theme', 'sidebar', 'fixedSiderbar']),
    styles() {
      return `flex: 0 0 ${this.sidebar?'256':'80'}px;
              max-width: ${this.sidebar?'256':'80'}px;
              min-width: ${this.sidebar?'256':'80'}px;
              width: ${this.sidebar?'256':'80'}px;`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';
.app-sidebar {
    width: auto !important;
    position: relative;
    z-index: 100;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    transition: all 0.18s linear;
    &.light {
        background-color: #fff;
        box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);
    }
    &.dark {
        background: #001529;
        box-shadow: 2px 0 6px rgba(0, 21, 41, 0.35);
    }
    &.fixed-siderbar {
        position: fixed;
        height: 100vh;
        left: 0;
        top: 0;
    }
    .sidebar-menu-wrap {
        flex: 1;
    }

}
</style>
