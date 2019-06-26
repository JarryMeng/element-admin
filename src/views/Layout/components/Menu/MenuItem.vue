<template lang="html">
  <ALink class="link-a" v-if="!isOneChild" :to="item.path">
    <el-menu-item class="menu-item" :index="item.path">
        <i class="el-icon-menu"></i>
        <span slot="title">{{item.meta.title}}</span>
    </el-menu-item>
  </ALink>
  <el-submenu class="sub-menu-item" v-else :index="item.path">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">{{item.meta.title}}</span>
    </template>
    <MenuItem v-for="(route,index) in item.children" :key="index" :item="route" />
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
  mounted(){
    this.$emit('ready',this)
  },
  computed: {
    isOneChild() {
      return this.item.children && this.item.children.length
    },
    routeItem() {
      if (this.isOneChild) {
        console.log(this.item.children)
        return this.item.children[0]
      }
      return this.item
    }
  }
}
</script>

<style lang="scss">
.menu-mode-vertical {
    // 菜单可以跳转子项样式 menu-item
    @mixin menu-item() {
        width: 100%;
        height: 40px;
        line-height: 40px !important;
        // &:hover {
        //     background: transparent !important;
        // }
    }
    // 菜单可以跳转子项包裹a标签样式
    @mixin link-a() {
        display: block;
        width: 100%;
        margin: 4px 0;
        position: relative;
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
        .sub-menu-item {

            .el-submenu__title {
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
    .dark {
        .link-a {
            // &.router-link-active {
            //     background-color: #1890ff;
            //     .el-menu-item {
            //         color: #fff;
            //         * {
            //             color: #fff;
            //         }
            //     }
            //
            // }
        }
        .sub-menu-item {}
    }
    .light {
        .link-a {
            &.router-link-active {
                background-color: #e6f7ff;
                .el-menu-item {
                    color: #409EFF;
                    * {
                        color: #409EFF;
                    }
                }

            }
        }
        .sub-menu-item {
            .el-submenu__title {
                &:hover {
                    background: transparent;
                    color: #fff;
                    * {
                        color: #fff;
                    }
                }
            }
        }
    }
}
.menu-mode-horizontal {

    // display: flex;
    // 菜单可以跳转子项样式 menu-item
    @mixin menu-item() {
        // width: 100%;
        height: 64px;
        line-height: 64px !important;

    }
    // 菜单可以跳转子项包裹a标签样式
    @mixin link-a() {
        display: inline-block;
        float: left;
        // width: 100%;
        height: 100%;
        position: relative;
        .menu-item {
            @include menu-item();

        }

    }
    // 带有子项菜单
    @mixin sub-menu-item() {
        height: 64px;
        .el-submenu__title {
            height: 64px !important;
            line-height: 64px !important;
        }
        .el-menu {}
    }
    .link-a {
        @include link-a();
    }
    .sub-menu-item {
        @include sub-menu-item();
    }
    .dark {}
    .light {}
}
</style>
