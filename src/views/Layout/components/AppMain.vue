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
import resize from './mixins/resize'
export default {
  name: 'AppMain',
  components: {
    RowWidth
  },
  mixins: [resize],
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

.app-main {
    @include flex-box(column);
    min-height: calc(100% - #{$navbar-height});
    padding: 0;
    &.has-tag-view {
        min-height: calc(100% - #{$navbar-height + $tagViews-height});
        &.fixed-header {
            margin-top: $navbar-height + $tagViews-height;
        }
        &.fixed-sider {
            margin-top: $navbar-height + $tagViews-height;
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
            padding: 20px;
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
