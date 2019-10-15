<template>
  <div id="app">
    <el-tabs tab-position="left" style="height: 100%;">
      <el-tab-pane label="表格">
        <egis-table-example></egis-table-example>
      </el-tab-pane>
      <el-tab-pane label="弹窗">
        <egis-dialog-example></egis-dialog-example>
      </el-tab-pane>
      <el-tab-pane label="分页">
        <egis-pagination-example></egis-pagination-example>
      </el-tab-pane> 
    </el-tabs>
  </div>
</template>

<script>
import egisTableExample from './components/egis-table'
import egisDialogExample from './components/egis-dialog'
import egisPaginationExample from './components/egis-pagination'
export default {
  name: "app",
  components:{
    egisTableExample,
    egisDialogExample,
    egisPaginationExample
  },
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  position: relative;
}
</style>
