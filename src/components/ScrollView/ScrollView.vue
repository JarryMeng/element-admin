<template>
<el-scrollbar class="scroll-view" :class="`${mode}-scroll-view`" :wrapClass="wrapClass" :viewStyle="viewStyle">
  <slot></slot>
</el-scrollbar>
</template>
<script>
export default {
  name: 'ScrollView',
  props: {
    mode: {
      type: String,
      default: 'vertical' //horizontal /
    },
    viewStyle: Object
  },
  computed: {
    wrapClass() {
      if (this.mode === 'vertical') {
        return 'scroll-inner-vertical-view'
      } else if (this.mode === 'horizontal') {
        return 'scroll-inner-horizontal-view'
      }
    }
  }
}
</script>
<style lang="scss">
.vertical-scroll-view {
    & > .scroll-inner-vertical-view {
        overflow-x: hidden !important;
        margin-bottom: 0 !important;
    }
    & > .el-scrollbar__bar.is-horizontal {
        display: none;
    }

}

.horizontal-scroll-view {
    & > .scroll-inner-horizontal-view {
        height: 146% !important;
    }
    & > .el-scrollbar__bar.is-horizontal {
        bottom: 0;
    }
    & > .el-scrollbar__bar.is-vertical {
        display: none;
    }

}
</style>
<style lang="scss" scoped>
.scroll-view {
    height: 100%;
    width: 100%;
}
</style>
