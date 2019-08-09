import Vue from 'vue'
import { throttle } from '@/utils'
const mixins = {
  beforeMount() {
    window.addEventListener('resize', this.handleResize)
  },
  created() {
    Vue.prototype.$resize = this
  },
  mounted() {
    this.handleResize()
    this.$el.addEventListener("transitionend", this.handleResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
    this.$el.removeEventListener("transitionend", this.handleResize)
    this.handleResize = null
    this.$off('resize')
    Vue.prototype.$resize = null
  },
  methods: {
    handleResize(e) {
      this.$emit('resize', e)
    }
  }
}
export default mixins
