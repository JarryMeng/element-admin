<template>
<el-main :class="[layoutMode,{'fixed-header':fixedHeader},{'fixed-sider':fixedSiderbar},{ 'side-opened':sidebar }]" class="app-main">
  <RowWidth>
    <TagsView />
    <div class="app-main-content">
      <router-view />
    </div>
  </RowWidth>
</el-main>
<!-- <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section> -->
</template>

<script>
import {
  mapGetters
} from 'vuex'
import RowWidth from './RowWidth'
import TagsView from '@/components/TagsView'
export default {
  name: 'AppMain',
  components: {
    RowWidth,
    TagsView
  },
  computed: {
    ...mapGetters(['sidebar', 'theme', 'layoutMode', 'fixedHeader', 'fixedSiderbar']),

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
@import '@/styles/mixins.scss';
.app-main {
    @include flex-box(column);
    min-height: calc(100% - 64px);
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
        width: calc(100% - 80px);
        &.side-opened {
            width: calc(100% - 256px);
        }
    }
}
</style>

<style lang="scss">

</style>
