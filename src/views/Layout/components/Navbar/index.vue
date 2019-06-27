<template>
<el-header :class="['app-navbar',{'fixed-header':fixedHeader},{'fixed-sider':fixedSiderbar},layoutMode,{ 'side-opened':sidebar }]">
  <div class="header" :class="[theme]" v-if="layoutMode==='sidemenu'">
    <Hamburger :isActive="sidebar" @toggleClick="toogleSidebar" />
    <div class="content-right">
      <FullScreen />
      <ThemePicker />
      <UserMenu />
    </div>
  </div>
  <div v-else class="navbar-header" :class="[theme]">
    <RowWidth class="header-inner">
      <Logo />
      <Menu mode="horizontal" />
      <FullScreen />
      <ThemePicker />
      <UserMenu />
    </RowWidth>
  </div>
</el-header>
</template>

<script>
import {
  mapGetters,
  mapActions
} from 'vuex'
import Logo from '../Logo.vue'
import Hamburger from '@/components/Hamburger'
import RowWidth from '../RowWidth'
import Menu from '../Menu'
import UserMenu from './UserMenu'
import FullScreen from '@/components/FullScreen'
import ThemePicker from '@/components/ThemePicker'
export default {
  components: {
    Hamburger,
    Logo,
    RowWidth,
    Menu,
    UserMenu,
    FullScreen,
    ThemePicker
  },
  computed: {
    ...mapGetters(['sidebar', 'theme', 'layoutMode', 'fixedHeader', 'fixedSiderbar'])
  },
  methods: {
    ...mapActions({
      toogleSidebar: 'app/toogleSidebar'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/mixins.scss';
.app-navbar {
    position: relative;
    padding: 0;
    z-index: 80;
    // height: 64px !important;
    height: inherit !important;
    &.fixed-sider {
        position: absolute;
        // width: inherit;
        top: 0;
        right: 0;
        z-index: 10;
        width: calc(100% - 80px);
        transition: width 0.18s linear;
        &.side-opened {
            width: calc(100% - 256px);
        }
    }
    &.fixed-header {
        position: fixed;
        // width: inherit;
        top: 0;
        right: 0;
        z-index: 10;
        transition: width 0.18s linear;
        &.topmenu {
            left: 0;
        }
        &.sidemenu {
            width: calc(100% - 80px);
        }

        &.side-opened {
            &.sidemenu {
                width: calc(100% - 256px);
            }
        }
    }

    .header {
        width: 100%;
        height: $navbar-height;
        background: #fff;
        transition: background 0.5s;
        box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
        flex: 1;
        @include flex-box(row,space-between,center);
        .user-menu {
            float: right;
        }
        .content-right {
            @include flex-box(row,flex-start,center);
        }
    }
    .navbar-header {
        @include flex-box(row,flex-start,center);
        height: $navbar-height;
        width: 100%;
        transition: background 0.5s;
        padding: 0 20px;
        &.light {
            background: #fff;
            box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
        }
        &.dark {
            background: #001529;
            box-shadow: 0 2px 6px rgba(0, 21, 41, 0.35);
            .full-screen {
                color: #fff;
            }
        }
        .header-inner {
            @include flex-box(row,flex-start,center);

        }
        .app-sidebar-menu {
            flex: 1;
            // border-bottom:0;
        }
    }
}
</style>
<style lang="scss">
.app-navbar {
    .navbar-header {
        &.dark {
            .user-menu {
                .avatar-wrapper {
                    color: #fff;
                }
            }
        }
    }
}
</style>
