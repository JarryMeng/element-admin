<template>
<scroll-view>
  <el-container class="app-wrapper">
    <Sidebar v-if="layoutMode!=='topmenu'" />
    <el-container class="app-container" direction="vertical">
      <Navbar />
      <AppMain />
    </el-container>
    <Setting v-if="settingShow" />
  </el-container>
</scroll-view>
</template>

<script>
import {
  mapGetters
} from 'vuex'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import AppMain from './components/AppMain'
import Setting from '@/components/Setting'
export default {
  name: 'Layout',
  components: {
    Sidebar,
    Navbar,
    AppMain,
    Setting
  },
  computed: {
    ...mapGetters(['layoutMode']),
    settingShow(){
      return process.env.NODE_ENV !== 'production'
    }
  }
}
</script>

<style lang="scss" scoped>
.app-container {
    position: relative;
    min-height: 100vh;
}
</style>
