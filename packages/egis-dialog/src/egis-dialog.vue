<template>
  <div id='egis-dialog'>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleCloseBefore">
      <slot></slot>
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
        this.$emit('handleClose',false)
      }
    }
};
</script>

<style lang='less' scoped>
/deep/.el-dialog{
  margin:0 auto;
}
</style>