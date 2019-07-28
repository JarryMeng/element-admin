// import {
//   mapGetters,
//   mapActions
// } from 'vuex'
import {
  throttle,
  debounce
} from '@/utils'
const mixins = {
  mounted() {
    // const throttleResize = throttle((e) => {
    //   console.log('111')
    // })
    this._resize = (e) => {
      console.log('111')
    }
    window.addEventListener('resize', debounce(this._resize))
  },
  beforeDestroy() {
    console.log('mixins')
    window.removeEventListener('resize', this._resize)
  }
}

export default mixins
