<template>
<el-color-picker
  :value="themeColor"
  :predefine="colorList"
  class="theme-picker"
  @change="changeThemeColor"
  size="medium"
  popper-class="theme-picker-dropdown" />
</template>

<script>
import ThemeColor from '@/utils/changeTheme'
import {
  colorList
} from '@/settings'

import {
  mapGetters,
  mapActions
} from 'vuex'
export default {
  data() {
    return {
      colorList: colorList.map(item => item.color)
    }
  },
  computed: {
    ...mapGetters(['themeColor'])
  },
  methods: {
    ...mapActions({
      setThemeColor: 'app/setThemeColor'
    }),
    async changeThemeColor(color) {
      await ThemeColor.changeTheme(color)
      this.setThemeColor(color)
    }
  }
}
</script>

<style>
.theme-message,
.theme-picker-dropdown {
  z-index: 99999 !important;
}
.theme-picker{
  height: 26px !important;
}
.theme-picker .el-color-picker__trigger {
  height: 26px !important;
  width: 26px !important;
  padding: 2px;
}

.theme-picker-dropdown .el-color-dropdown__link-btn {
  display: none;
}
</style>
