<template>
<el-main :class="[layoutMode,{'has-tag-view': tagViewShow},{'fixed-header':fixedHeader},{'fixed-sider':fixedSiderbar},{ 'side-opened':sidebar }]" class="app-main">
  <RowWidth>
    <div class="app-main-content">
      <transition name="el-fade-in" mode="out-in">
        <router-view />
      </transition>
    </div>
  </RowWidth>
</el-main>
<!--
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
     -->
</template>

<script>
import {
  mapGetters
} from 'vuex'
import RowWidth from './RowWidth'
export default {
  name: 'AppMain',
  components: {
    RowWidth
  },
  computed: {
    ...mapGetters(['sidebar', 'theme', 'tagViewShow', 'layoutMode', 'fixedHeader', 'fixedSiderbar']),

    // cachedViews() {
    //   return this.$store.state.tagsView.cachedViews
    // },
    // key() {
    //   return this.$route.path
    // }
  }
}
</script>

<style lang="scss" scoped>

// tagViews高度
$tagViewsH: 40px;
.app-main {
    @include flex-box(column);
    min-height: calc(100% - #{$navbar-height});
    &.has-tag-view {
        min-height: calc(100% - #{$navbar-height + $tagViewsH});
        &.fixed-header {
            margin-top: $navbar-height + $tagViewsH;
        }
        &.fixed-sider {
            margin-top: $navbar-height + $tagViewsH;
        }
    }
    // background:#757575;
    // sidemenu side-opened
    &.fixed-header {
        margin-top: $navbar-height;
    }
    .row-width {
        height: 100%;
        flex: 1;
        @include flex-box(column);
        .app-main-content {
            flex: 1;
            @include flex-box(column);
            & > * {
                flex: 1;
            }
        }
    }
    &.fixed-sider {
        position: absolute;
        right: 0;
        margin-top: $navbar-height;
        transition: width 0.18s linear;
        width: calc(100% - #{$sidebar-collapse-width});
        &.side-opened {
            width: calc(100% - #{$sidebar-width});
        }
    }
}
</style>

<style lang="scss">

</style>
