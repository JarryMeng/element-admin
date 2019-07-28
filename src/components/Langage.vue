<template lang="html">
  <el-dropdown @command="handleClick">
    <span class="el-dropdown-link">
      选择语言<i class="el-icon-arrow-down el-icon--right"></i>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="zh">中文</el-dropdown-item>
      <el-dropdown-item command="en">English</el-dropdown-item>
      <el-dropdown-item command="es">Español</el-dropdown-item>
      <el-dropdown-item command="ja">日文</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  mounted() {
    // this.$i18n.locale = lang
  },
  methods:{
    handleClick(val){
      // console.log(this.$i18n)
      this.$i18n.locale = val
      console.log(val)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
