<template lang="html">
  <div class="user-menu">
    <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="hover">
      <div class="avatar-wrapper">
        <el-avatar icon="el-icon-user-solid"></el-avatar>
        <!-- <img src="" class="user-avatar"> -->
        {{userName}}
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
  mapGetters,
  mapActions
} from 'vuex'
export default {
  computed: {
    ...mapGetters(['userName'])
  },
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
    display: inline-block;
    .avatar-container {
        height: 100%;
        padding: 0 10px;
        cursor: pointer;
        .avatar-wrapper {
            line-height: $navbar-height;
            font-size: 16px;
            @include flex-box(row,flex-start,center);
            .el-avatar{
              display: inline-block;
              margin-right: 6px;
            }
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
