<template lang="html">
  <div class="popup">
    <transition name="popup-mask-fade">
      <div class="mask" v-show="show" @click="show=false"></div>
    </transition>
    <div class="popup-inner" :class="{'popup-open':show}">
      <div class="toogle-btn" @click="toogle">
        <el-button class="btn" type="primary" :icon="show?'el-icon-close':'el-icon-setting'"></el-button>
      </div>
      <div class="popup-content">
        <div class="close" @click="show=false">
          <i class="el-icon-close"></i>
        </div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      show: this.value
    }
  },
  watch: {
    value(val, oldVal) {
      this.show = val
    }
  },
  methods: {
    toogle() {
      this.show = !this.show
      this.$emit('input', this.show)
      this.$emit('change', this.show)
    }
  }
}
</script>

<style lang="scss" scoped>
.popup {
    top: 0;
    bottom: 0;
    width: 0;
    z-index: 1000;
    position: absolute;
    right: 0;
    .mask {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.65);
        opacity: 0.3;
    }
    .close {
        position: absolute;
        width: 36px;
        height: 36px;
        top: 0;
        right: 0;
        line-height: 36px;
        text-align: center;
        z-index: 10;
        cursor: pointer;

        &:hover {
            color: #409EFF;
        }
    }
    .toogle-btn {
        position: absolute;
        width: 48px;
        height: 48px;
        left: -48px;
        top: 0;
        bottom: 0;
        margin: auto;
        .btn {
            width: 100%;
            height: 100%;
            font-size: 18px;
            padding: 0 !important;
            @include flex-box(row,center,center);
            &:focus {
                background: #409EFF !important;
                border-color: #409EFF !important;
            }
            &:hover {
                background: #66b1ff !important;
                border-color: #66b1ff !important;
            }
        }
    }
    .popup-inner {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        background: #fff;
        z-index: 100;
        transition: all 0.5s;
        transform: translateX(0);
        box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);
        &.popup-open {
            transform: translateX(-100%);
        }
        .popup-content {
            position: relative;
            height: 100%;
            overflow: hidden;
        }
    }
    .popup-mask-fade-enter-active,
    .popup-mask-fade-leave-active {
        transition: opacity 0.5s;
    }
    .popup-mask-fade-enter,
    .popup-mask-fade-leave-to {
        opacity: 0;
    }
}
</style>
