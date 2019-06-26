<template>
<scroll-view>
  <el-container class="app-wrapper">
    <Sidebar v-if="layoutMode==='sidemenu'" />
    <el-container class="app-container" direction="vertical">
      <Navbar />
      <AppMain />
    </el-container>
    <Setting />
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
    ...mapGetters(['layoutMode'])
  }
}
</script>

<style lang="scss" scoped>
.app-container {
    position: relative;
    min-height: 100vh;
}
</style>
