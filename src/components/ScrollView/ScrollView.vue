<template>
  <el-scrollbar class="scroll-view"
  :class="`${mode}-scroll-view`"
  :wrapClass="wrapClass"
  :viewStyle="viewStyle">
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
      } else {
        return 'scroll-inner-horizontal-view'
      }
    }
  }
}

</script>
<style>
.scroll-inner-vertical-view {
  overflow-x: hidden !important;
  margin-bottom: 0 !important;
}

.scroll-inner-horizontal-view {
  overflow-y: hidden !important;
}

</style>
<style lang="scss" scoped>
.scroll-view {
  height: 100%;
  width: 100%;
}

</style>
