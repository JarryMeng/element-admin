<template>
  <el-main
   :class="[layoutMode,{'fixed-header':fixedHeader},{'fixed-sider':fixedSiderbar},{ 'side-opened':sidebar }]"
   class="app-main">
    <RowWidth>
      <router-view />
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
import { mapGetters } from 'vuex'
import RowWidth from './RowWidth'
export default {
  name: 'AppMain',
  components:{
    RowWidth
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
.app-main{

  // background:#757575;
  // sidemenu side-opened
  &.fixed-header{
    margin-top:64px;
  }
  &.fixed-sider{
    position: absolute;
    right:0;
    margin-top:64px;
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
