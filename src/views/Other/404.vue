<template lang="html">
  <div class="page-404">
    <el-row>
      <el-col :span="12">
        <h2>您无法进入此页面</h2>
        <p>请检查您输入的URL地址是否正确，或单击下面按钮返回主页</p>
        <el-button type="primary" @click="$router.replace('/')">回首页</el-button>
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
.page-404 {
    width: 800px;
    max-width: 100%;
    padding: 100px 0;
    margin: 0 auto;
}
</style>
