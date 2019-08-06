<template>
<el-header :class="[
  'app-navbar',
  {'fixed-header':fixedHeader},
  {'fixed-sider':fixedSiderbar},
  layoutMode,
  { 'side-opened':sidebar },
  {'tag-view': tagViewShow}
]">
  <div class="header" :class="[theme]" v-if="layoutMode==='sidemenu'">
    <Hamburger :isActive="sidebar" @toggleClick="toogleSidebar" />
    <div class="content-right">
      <FullScreen />
      <ThemePicker />
      <UserMenu />
    </div>
  </div>
  <div v-else class="navbar-header" :class="[theme, layoutMode]">
    <RowWidth class="header-inner">
      <Logo />
      <div class="content">
        <Hamburger :isActive="sidebar" v-if="layoutMode === 'mergeHeader'" @toggleClick="toogleSidebar" />
        <Menu v-if="layoutMode !== 'mergeHeader'" mode="horizontal" />
        <div class="content-right">
          <FullScreen />
          <ThemePicker />
          <UserMenu />
        </div>
      </div>
    </RowWidth>
  </div>
  <RowWidth v-if="tagViewShow">
    <TagsView />
  </RowWidth>

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
import TagsView from '@/components/TagsView'
export default {
  components: {
    Hamburger,
    Logo,
    RowWidth,
    Menu,
    UserMenu,
    FullScreen,
    ThemePicker,
    TagsView
  },
  computed: {
    ...mapGetters(['sidebar', 'theme', 'tagViewShow', 'layoutMode', 'fixedHeader', 'fixedSiderbar'])
  },
  methods: {
    ...mapActions({
      toogleSidebar: 'app/toogleSidebar'
    })
  }
}
</script>

<style lang="scss" scoped>
.app-navbar {
    position: relative;
    padding: 0;
    z-index: 80;
    background: $light;
    height: $navbar-height !important;
    // 合并header
    &.mergeHeader {
        display: flex;
        align-items: flex-end;
        // 显示tagViews
        &.tag-view {
            height: $navbar-height + $tagViews-height !important;
        }
    }

    height: inherit !important;
    &.fixed-sider {
        position: absolute;
        // width: inherit;
        top: 0;
        right: 0;
        z-index: 10;

        width: calc(100% - #{$sidebar-collapse-width});
        transition: width 0.18s linear;
        &.side-opened {
            width: calc(100% - #{$sidebar-width});
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
            width: calc(100% - #{$sidebar-collapse-width});
        }

        &.side-opened {
            &.sidemenu {
                width: calc(100% - #{$sidebar-width});
            }
        }
    }

    .header {

        position: relative;
        z-index: 100;
        width: 100%;
        height: $navbar-height;
        background: $light;
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
        position: relative;
        z-index: 100;
        @include flex-box(row,flex-start,center);
        height: $navbar-height;
        width: 100%;
        transition: background 0.5s;
        padding: 0 20px;
        &.light {
            background: $light;
            box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
        }
        &.dark {
            background: $dark;
            box-shadow: 0 2px 6px rgba(0, 21, 41, 0.35);
            .full-screen {
                color: #fff;
            }
            .hamburger {
                svg {
                    color: #fff;
                }
            }
        }
        &.mergeHeader {
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            align-items: flex-end;

        }
        .header-inner {
            @include flex-box(row,flex-start,center);
            .content {
                @include flex-box(row,space-between,center);
                flex: 1;
            }
            .content-right {
                @include flex-box(row,flex-start,center);
                float: right;
                height: $navbar-height;
            }
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
