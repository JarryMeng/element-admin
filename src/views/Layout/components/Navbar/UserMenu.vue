<template lang="html">
  <div class="user-menu">
    <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="hover">
      <div class="avatar-wrapper">
        <img src="" class="user-avatar">
        {{'Meng'}}
        <i class="el-icon-caret-bottom"/>
      </div>
      <el-dropdown-menu slot="dropdown">
        <router-link to="/">
          <el-dropdown-item>
            个人信息
          </el-dropdown-item>
        </router-link>
        <el-dropdown-item divided>
          <span style="display:block;" @click="loginout">退出</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import {
  mapActions
} from 'vuex'
export default {
  methods: {
    ...mapActions({
      userLogout: 'user/userLogout'
    }),
    async loginout() {
      await this.userLogout()
      this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.user-menu {

    .avatar-container {
        height: 100%;
        padding: 0 10px;
        cursor: pointer;
        .avatar-wrapper {
            line-height: 64px;
            font-size: 16px;
        }
    }
}
.el-dropdown-menu {
    top: 60px;
    width: 160px;
    .el-dropdown-menu__item {
        line-height: 30px;
    }
}
</style>
