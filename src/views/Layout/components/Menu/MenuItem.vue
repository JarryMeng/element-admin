<template lang="html">
  <ALink class="link-a" v-if="isOneChild" :to="routeItem.path">
    <el-menu-item class="menu-item" :index="routeItem.path">
        <i v-if="routeItem.meta.icon" :class="routeItem.meta.icon"></i>
        <span slot="title">{{routeItem.meta.title}}</span>
    </el-menu-item>
  </ALink>
  <el-submenu class="sub-menu-item" v-else
  :index="routeItem.path"
  :popper-append-to-body="false">
    <template slot="title">
      <i v-if="routeItem.meta.icon" :class="routeItem.meta.icon"></i>
      <span slot="title">{{routeItem.meta.title}}</span>
    </template>
    <MenuItem v-for="(route,index) in routeItem.children" :key="index" :item="route" />
  </el-submenu>
</template>
<script>
// import {
//   mapGetters
// } from 'vuex'
import ALink from './ALink'
export default {
  name: 'MenuItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  components: {
    ALink
  },
  computed: {
    isOneChild() {
      if (!this.item.children) {
        return true
      }
      if (this.item.children && this.item.children.length <= 1) {
        return true
      }
      return false
    },
    routeItem() {
      if (this.isOneChild) {
        if (!this.item.children) {
          return this.item
        }
        return this.item.children[0]
      }
      return this.item
    }
  }
}
</script>

<style lang="scss">
// 深色
$dark-bg: #001529;
$dark-active-hover-bg: $default-theme;
$dark-color: rgba(255,255,255,0.65);
$dark-active-hover-color: #fff;
$dark-sub-menu-bg: #000c17;
// 浅色
$light-bg: #fff;
$light-active-hover-bg: #ecf5ff;
$light-color: #303133;
$light-active-hover-color: $default-theme;

$menu-item-height: 40px;
// 纵向菜单样式
.menu-mode-vertical {
    // 菜单子项常态样式
    @mixin menu-item($theme) {
        .link-a {
            display: inline-block;
            width: 100%;
            height: $menu-item-height;
            @if $theme== 'light' {
                color: $light-color;
            }
            @if $theme== 'dark' {
                color: $dark-color;
            }
            margin: 4px 0;
            .menu-item {
                margin: 0;
            }
        }
        .menu-item {
            height: $menu-item-height !important;
            line-height: $menu-item-height !important;
            margin: 4px 0;
            @if $theme== 'light' {
                color: $light-color;
            }
            @if $theme== 'dark' {
                color: $dark-color;
            }
        }
        .sub-menu-item {
            margin: 4px 0;
            .el-submenu__title {
                height: $menu-item-height;
                line-height: $menu-item-height !important;
                @if $theme== 'light' {
                    color: $light-color;
                }
                @if $theme== 'dark' {
                    color: $dark-color;
                }
            }
            .el-menu {
                @if $theme== 'dark' {
                    background: $dark-sub-menu-bg;
                    box-shadow: inset 0 2px 8px rgba(0,0,0,.45);
                }

            }
        }
        // 折叠
        &.el-menu--collapse {

            .menu-item {
                .el-tooltip {
                    width: $sidebar-collapse-width !important;
                    text-align: center;
                    i {
                        margin-right: 0 !important;
                    }
                }
            }
            .sub-menu-item {
                .el-submenu__title {
                    width: $sidebar-collapse-width !important;
                    text-align: center;
                }
            }
            // 悬浮菜单
            .el-menu--popup {
                @if $theme== 'dark' {
                    border: 0;
                }
                .sub-menu-item {
                    .el-submenu__title {
                        width: 100% !important;
                        text-align: left;
                    }
                }
            }
        }
    }
    // 菜单子项选中样式
    @mixin menu-item-active-hover($theme) {
        .link-a {
            &.router-link-active,
            &:hover {
                @if $theme == 'light' {
                    color: $light-active-hover-color !important;
                    background: $light-active-hover-bg !important;
                }
                @if $theme == 'dark' {
                    color: $dark-active-hover-color !important;
                    background: $dark-active-hover-bg !important;
                }
            }
        }
        .menu-item {
            &.is-active,
            &:hover {
                @if $theme == 'light' {
                    color: $light-active-hover-color !important;
                    background: $light-active-hover-bg !important;
                    & > * {
                        color: $light-active-hover-color !important;
                    }
                }
                @if $theme == 'dark' {
                    color: $dark-active-hover-color !important;
                    background: $dark-active-hover-bg !important;
                    & > * {
                        color: $dark-active-hover-color !important;
                    }
                }
            }
        }
        .sub-menu-item {
            .el-submenu__title:hover {
                @if $theme== 'dark' {
                    color: $default-theme !important;
                    background: transparent !important;
                    & > * {
                        color: $default-theme !important;
                    }
                }
            }
        }
        // 折叠
        &.el-menu--collapse {
            &.sub-menu-item:hover,
            .sub-menu-item.is-active {
                .el-submenu__title {
                    @if $theme == 'light' {
                        color: $light-active-hover-color !important;
                        background: $light-active-hover-bg !important;
                        & > * {
                            color: $light-active-hover-color !important;
                        }
                    }
                    @if $theme == 'dark' {
                        color: $dark-active-hover-color !important;
                        background: $dark-active-hover-bg !important;
                        & > * {
                            color: $dark-active-hover-color !important;
                        }
                    }

                }
            }
        }
    }
    &.light {
        @include menu-item(light);
        @include menu-item-active-hover(light);
    }
    &.dark {
        @include menu-item(dark);
        @include menu-item-active-hover(dark);
    }
}
// 横向菜单样式
.menu-mode-horizontal {
    // width: auto!important;
    // white-space: nowrap;
    // 菜单子项常态样式
    @mixin menu-item($theme) {
        .link-a {
            display: inline-block;
            float: left;
            height: $navbar-height;
            line-height: $navbar-height;
            @if $theme == 'light' {
                color: $light-color !important;
            }
            @if $theme == 'dark' {
                color: $dark-color !important;
            }
        }
        .menu-item {

            height: $navbar-height !important;
            line-height: $navbar-height !important;
            @if $theme == 'light' {
                color: $light-color !important;
                & > * {
                    color: $light-color !important;
                }
            }
            @if $theme == 'dark' {
                color: $dark-color !important;
                & > * {
                    color: $dark-color !important;
                }
            }
        }
        .sub-menu-item {
            // display: inline-block;
            // float: none;
            // margin: 4px 0;
            .el-submenu__title {
                height: $navbar-height !important;
                line-height: $navbar-height !important;
                @if $theme == 'light' {
                    color: $light-color !important;
                    & > * {
                        color: $light-color !important;
                    }
                }
                @if $theme == 'dark' {
                    color: $dark-color !important;
                    & > * {
                        color: $dark-color !important;
                    }
                }
            }
        }
        // 悬浮菜单
        .el-menu--popup {
            @if $theme == 'dark' {
                background: $dark-sub-menu-bg;
            }
            .link-a,
            .menu-item {
                display: block;
                float: none;
                height: $menu-item-height !important;
                line-height: $menu-item-height !important;
                @if $theme == 'light' {
                    color: $light-color !important;
                    & > * {
                        color: $light-color !important;
                    }
                }
                @if $theme == 'dark' {
                    color: $dark-color !important;
                    background: $dark-sub-menu-bg;
                    & > * {
                        color: $dark-color !important;
                    }
                }
            }
            .sub-menu-item {
                display: block;
                .el-submenu__title {
                    height: $menu-item-height !important;
                    line-height: $menu-item-height !important;
                    border-bottom: 0 !important;
                    @if $theme == 'dark' {
                        color: $dark-color !important;
                        & > * {
                            color: $dark-color !important;
                        }
                        background: $dark-sub-menu-bg;
                    }
                    @if $theme == 'light' {
                        color: $light-color !important;
                        & > * {
                            color: $light-color !important;
                        }
                    }
                }
            }
        }
    }
    // 菜单子项选中样式
    @mixin menu-item-active-hover($theme) {
        .link-a {
            &.router-link-active,
            &:hover {
                @if $theme == 'light' {
                    color: $light-active-hover-color !important;
                    background: #fff;
                }
                @if $theme == 'dark' {
                    color: $dark-active-hover-bg !important;
                    background: transparent !important;
                }

            }
        }
        .menu-item {
            &.is-active,
            &:hover {
                @include border(bottom,2px,$light-active-hover-color);
                @if $theme == 'light' {
                    color: $light-active-hover-color !important;
                    background: #fff;

                    & > * {
                        color: $light-active-hover-color !important;
                    }
                }

                @if $theme == 'dark' {
                    color: $dark-active-hover-bg !important;
                    background: transparent !important;
                    & > * {
                        color: $dark-active-hover-bg !important;
                    }
                }

            }
        }

        .sub-menu-item {
            &.is-active {
                & > .el-submenu__title {
                    color: $light-active-hover-color !important;
                    & > * {
                        color: $light-active-hover-color !important;
                    }
                }
            }
            .el-submenu__title:hover {
                @if $theme == 'light' {
                    color: $light-active-hover-color !important;
                    background: #fff;
                    & > * {
                        color: $light-active-hover-color !important;
                    }
                }
                @if $theme == 'dark' {
                    color: $dark-active-hover-bg !important;
                    background: transparent !important;
                    & > * {
                        color: $dark-active-hover-bg !important;
                    }
                }

            }
        }
        // 悬浮菜单
        .el-menu--popup {
            .link-a {
                &.router-link-active,
                &:hover {

                    @if $theme == 'light' {
                        color: $light-active-hover-color !important;
                        background: $light-active-hover-bg !important;
                    }
                    @if $theme == 'dark' {
                        color: #fff !important;
                        background: $dark-active-hover-bg !important;
                        & > * {
                            color: #fff !important;
                        }
                    }
                }
            }
            .menu-item {
                border: 0 !important;
                &.is-active,
                &:hover {
                    @if $theme == 'light' {
                        color: $light-active-hover-color !important;
                        background: $light-active-hover-bg !important;
                    }
                    @if $theme == 'dark' {
                        color: #fff !important;
                        background: $dark-active-hover-bg !important;
                        & > * {
                            color: #fff !important;
                        }
                    }
                }
            }

        }
    }
    &.light {
        @include menu-item(light);
        @include menu-item-active-hover(light);
    }
    &.dark {
        @include menu-item(dark);
        @include menu-item-active-hover(dark);
    }
}
</style>
