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
    <MenuItem v-if="routeItem.children.length" v-for="(route,index) in routeItem.children" :key="index" :item="route" />
  </el-submenu>
</template>
<script>
import {
  mapGetters
} from 'vuex'
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
@import '@/styles/mixins.scss';
.menu-mode-vertical {
    // 菜单可以跳转子项样式 menu-item
    @mixin menu-item() {
        width: 100%;
        height: 40px;
        line-height: 40px !important;
        // transition: all 0.18s;
    }
    // 菜单可以跳转子项包裹a标签样式
    @mixin link-a() {
        display: block;
        width: 100%;
        margin: 4px 0;
        position: relative;
        // transition: all 0.18s;
        .menu-item {
            @include menu-item();
        }
    }
    // 带有子项菜单
    @mixin sub-menu-item() {
        .el-submenu__title {
            height: 40px;
            line-height: 40px;
        }
        .el-menu {
            background: transparent;
            .link-a {
                @include link-a();
            }
        }
    }
    // 折叠
    &.el-menu--collapse {
        .menu-item {

            .el-tooltip {
                width: 80px !important;
                text-align: center;
                i {
                    margin-right: 0 !important;
                }
            }
        }
        .sub-menu-item {
            &.is-active {
                .el-submenu__title {
                    width: 80px !important;
                    text-align: center;
                    * {
                        color: $default-theme;
                    }
                }
            }
            .el-submenu__title {
                width: 80px !important;
                text-align: center;
            }
        }
    }
    .link-a {
        @include link-a();
    }
    .sub-menu-item {
        @include sub-menu-item();
    }
    &.dark {
        .link-a {
            &.router-link-active {
                background-color: $default-theme;
            }
        }
        .menu-item {
            color: rgba(255, 255, 255, 0.65);
            * {
                color: rgba(255, 255, 255, 0.65);
            }
            &.is-active,
            &:hover {
                background-color: $default-theme;
                color: #fff;
                * {
                    color: #fff;
                }
            }
        }
        .sub-menu-item {
            .el-submenu__title {
                color: rgba(255, 255, 255, 0.65);
                * {
                    color: rgba(255, 255, 255, 0.65);
                }
                &:hover {
                    background: transparent;
                    color: $default-theme;
                    * {
                        color: $default-theme;
                    }
                }
            }
            .el-menu{
              background: #001529;
              .menu-item{
                background: #001529;
                &:hover,&.is-active {
                    background: $default-theme;
                    color: #fff;
                    * {
                        color: #fff;
                    }
                }
              }
            }
        }
    }
    &.light {
        .link-a {
            &.router-link-active {
                background-color: #ecf5ff;
            }
        }
        .menu-item {
            &.is-active,
            &:hover {
                background-color: #ecf5ff;
                * {
                    color: $default-theme;
                }
            }
        }
        .sub-menu-item {
            .el-submenu__title {
                &:hover {
                    background: transparent;
                    color: $default-theme;
                    * {
                        color: $default-theme;
                    }
                }
            }

        }
    }
}
.menu-mode-horizontal {

    // 菜单可以跳转子项样式 menu-item
    @mixin menu-item() {
        height: $navbar-height;
        line-height: $navbar-height !important;
        background: transparent !important;
        &.is-active,
        &:hover {

            border-bottom: 2px solid $default-theme;
            color: $default-theme !important;
            *{
              color: $default-theme !important;
            }
        }
    }
    // 菜单可以跳转子项包裹a标签样式
    @mixin link-a() {
        display: inline-block;
        position: relative;
        float: left;
        .menu-item {
            @include menu-item();

        }

    }
    // 带有子项菜单
    @mixin sub-menu-item() {
        height: 64px;
        &.is-active,
        &:hover {

            .el-submenu__title {
                color: $default-theme;
                border-bottom: 2px solid $default-theme !important;
                * {
                    color: $default-theme;
                }
            }
        }
        .el-submenu__title {
            height: 64px !important;
            line-height: 64px !important;
        }
        .el-menu {
            .link-a {
                display: block !important;
                float: none !important;
            }
            .menu-item {
                height: 40px;
                line-height: 40px;
                &.is-active,
                &:hover {
                    color: $default-theme;
                    background: #ecf5ff;
                    * {
                        color: $default-theme;
                    }
                }
            }
        }
    }
    & > .link-a {
        @include link-a();
    }
    & > .sub-menu-item {
        @include sub-menu-item();
    }
    &.dark {
      .menu-item{
        color: #fff;
        *{
          color: #fff;
        }
      }
      .sub-menu-item{
        .el-submenu__title {
          background: transparent;
          color:#fff;
          *{
            color: #fff;
          }
        }
        &:hover,&.is-active{
          .el-submenu__title {
            background: transparent;
            color:$default-theme;
            *{
              color:$default-theme;
            }
          }
        }
        .el-menu{
          background: #001529;
          .menu-item{
            background: #001529;
          }
        }
      }
    }
    &.light {
        .link-a {
            &.router-link-active {}
        }
        .menu-item {
            &.is-active,
            &:hover {}
        }
        .sub-menu-item {
            .el-submenu__title {}
        }
    }
}
</style>
