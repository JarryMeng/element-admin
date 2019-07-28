<template lang="html">
  <div class="page-401">
    <el-button type="primary" @click="$router.go(-1)">返回</el-button>
    <el-row>
      <el-col :span="12">
        <h2>您没有权限访问该页面</h2>
        <p>请联系管理员分配可访问权限</p>
        <ul class="link-list">
          <li>或者您可以去:</li>
          <li class="link">
            <a href="#/" class="">
                回首页
            </a>
          </li>
        </ul>
      </el-col>
      <el-col :span="12">

      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.page-401 {
  width: 800px;
  max-width: 100%;
  padding: 100px;
  margin: 0 auto;
  .link-list{
    line-height: 24px;
    .link{
      color: $default-theme;
    }
  }

}
</style>
