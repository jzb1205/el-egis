<template>
  <div id='egis-dialog'>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleCloseBefore">
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "egis-dialog",
  props: {
    dialogVisible:{
      type:Boolean,
      default:false
    }
  },
  data () {
    return {
       
    }
  },
    methods: {
      handleCloseBefore(){
        this.$emit('handleClose')
      }
    }
};
</script>

<style lang='less' scoped>
.egis-dialog{
  position:relative;
}
</style>