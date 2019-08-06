<template lang="html">
    <router-link
      class="app-logo"
      tag="h1"
      :class="`${theme} ${layoutMode}`"
      :to="{ path: '/' }">
      <img class="img" src="@/assets/logo.png" alt="logo">
      <transition name="app-logo-fade" mode="out-in">
        <h1 class="title" v-if="sidebar || layoutMode !== 'sidemenu'">
          {{title}}
        </h1>
      </transition>
    </router-link>

</template>

<script>
import {
  mapGetters
} from 'vuex'
import {
  title
} from '@/settings'
export default {
  data: () => ({
    title
  }),
  computed: {
    ...mapGetters(['sidebar', 'theme', 'layoutMode', 'contentWidth'])
  }
}
</script>

<style lang="scss" scoped>
.app-logo {
    height: $navbar-height;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    z-index: 10;
    flex-shrink: 0;
    @include flex-box(row,flex-start,center);
    cursor: pointer;
    margin: 0;
    // padding: 0 12px;
    transition: background 0.5s;
    &.sidemenu {
        &.dark {
            background: $dark;
            color: #fff;
        }
        &.light {
            background: $light;
            box-shadow: 1px 1px 0 0 #e8e8e8;
            color: $default-theme;
        }
    }
    &.mergeHeader,
    &.topmenu {
        width: $sidebar-width;
        box-shadow: none;
        &.dark {
            background: $dark;
            color: #fff;
        }
        &.light {
            background: $light;
            color: $default-theme;
        }
    }
    &.mergeHeader {
        width: auto !important;
        .title {
            width: auto !important;
            margin-right:12px;
        }
    }
    .img {
        height: 40px;
    }
    .title {
        margin-left: 12px;
        // overflow: hidden;
        font-size: 20px;
        // @include flex-box(row,center,center);
        white-space: nowrap;
        width: 0;
    }
    .app-logo-fade-enter-active,
    .app-logo-fade-leave-active {
        transition: all 0.5s;
    }
    .app-logo-fade-enter,
    .app-logo-fade-leave-to {
        width: 0;
        opacity: 0;
    }
}
</style>
