<template lang="html">
  <div :class="['row-width',`content-width-${contentWidth}`]">
    <slot></slot>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed:{
    ...mapGetters(['contentWidth']) //fixed  fluid
  }
}
</script>

<style lang="scss" scoped>
.row-width{
  width: 100%;

  &.content-width-fixed{
    max-width: 1200px;
    margin: 0 auto;
  }
  &.content-width-fluid{

  }
}
</style>
