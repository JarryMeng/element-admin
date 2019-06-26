<template>
<div class="login">
  <el-card class="login-card">
    <div class="title">
      <img class="img" src="" alt="logo">

    </div>
    <el-form ref="loginForm" @keyup.enter.native="submitForm('loginForm')" :rules="loginRules" :model="loginForm" label-width="0">
      <el-form-item prop="userName">
        <el-input placeholder="账户" prefix-icon="el-icon-user" v-model="loginForm.userName">
        </el-input>
      </el-form-item>
      <el-form-item prop="passWord">
        <el-input placeholder="密码" prefix-icon="el-icon-lock" v-model="loginForm.passWord">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" :loading="loading" @click="submitForm('loginForm')" type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</div>
</template>
<script>
import {
  mapActions
} from 'vuex'
export default {
  data() {
    return {
      loading: false,
      loginForm: {
        userName: '',
        passWord: ''
      },
      loginRules: {
        userName: [{
          required: true,
          message: '请输入帐户名或邮箱地址',
          trigger: 'blur'
        }],
        passWord: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }]
      }
    }
  },
  methods: {
    ...mapActions({
      userLogin: 'user/userLogin'
    }),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.loading = true
          this.userLogin(this.loginForm)
            .then(res => {
              this.$router.push({
                path: '/'
              })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          return false;
        }
      })

    }
  }
}
</script>
<style lang="scss" scoped>
.login {
    width: 100%;
    height: 100%;
    position: relative;
    background: #f0f2f5 url("./login-bg.svg") no-repeat 50%;

    .login-card {
        min-width: 260px;
        width: 368px;
        height: 300px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;

        .login-btn {
            width: 100%;
        }

        .title {
            text-align: center;
            line-height: 50px;
            font-size: 24px;
            vertical-align: top;
            margin-bottom: 20px;

            .img {
                display: inline-block;
                float: left;
            }
        }
    }
}
</style>
