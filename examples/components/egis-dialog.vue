<template>
  <div class="egis-dialog-class">
    <el-button type="text" @click="dialogVisible = !dialogVisible">点击打开 Dialog</el-button>
    <egis-dialog 
      v-drag-dialog
      :title="title"
      :width="width"
      :top='top'
      :dialogVisible="dialogVisible"
      :modal="modal"
      :fullscreen="fullscreen"
      @handleClose="handleClose"
    >
    <el-button>dsafd</el-button>
    </egis-dialog>
  </div>
</template>

<script>
import dragDialog from "./../../directive/drag-dialog";
export default {
  directives: {
    dragDialog
  },
  data() {
    return {
      dialogVisible: false,
      modal: false,
      fullscreen: false,
      isShowClose:false,
      title:'13212',
      width:'50%',
      top:'15vh',
      center:false
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          this.dialogVisible = done;
        })
        .catch(() => {
          // this.dialogVisible = done;
        });
    },
    plus(){

    },
  }
};
</script>

<style lang='less' scoped>
.scale-dialog{
    i{
        &:hover{
        color:#00a0e9;
      }
    }
}
</style>
