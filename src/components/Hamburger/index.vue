<template>
<div class="hamburger" :class="layoutMode === 'mergeHeader' ? theme : ''" style="padding: 0 15px;" @click="toggleClick">
  <svg :class="{'is-active':isActive}" class="hamburger-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="28" height="28">
    <path
      d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z" />
  </svg>
</div>
</template>

<script>
import {
  mapGetters
} from 'vuex'
export default {
  name: 'Hamburger',
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters(['theme', 'layoutMode'])
  },
  methods: {
    toggleClick() {
      this.$emit('toggleClick')
    }
  }
}
</script>

<style lang="scss" scoped>
.hamburger {
    display: inline-block;
    vertical-align: middle;
    width: 72px;
    height: 64px;
    text-align: center;
    line-height: 80px;
    overflow: hidden;
    transition: background-color 0.5s;
    cursor: pointer;
    &.dark {
        svg {
            fill: #fff;
        }

    }
    &:hover {
        background: rgba(0,0,0,0.1);
    }
    .hamburger-icon {
        &.is-active {
            transform: rotate(180deg);
        }
    }
}
</style>
