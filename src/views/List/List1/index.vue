<template lang="html">
  <el-row>
    <el-col :span="24">
      <el-form :inline="true" class="table-search">
        <el-form-item label="审批人">
          <el-input value="" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select value="" placeholder="活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">查询</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="24" style="height:300px;">
      <el-table
      border
      height="100%"
      :data="tableData">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </el-col>
    <el-col :span="24">
      <el-pagination
        class="table-pagination"
        background
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      tableData: []
    }
  },
  created(){
    setTimeout(()=>{
      this.tableData = [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }]
    },1000)
  }
}
</script>

<style lang="scss" scoped>
</style>
