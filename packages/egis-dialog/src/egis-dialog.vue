<template>
  <div id="egis-dialog">
    <el-dialog
      :title="title"
      :modal="modal"
      :fullscreen='fullscreen' 
      :visible.sync="dialogVisible"
      :width="width"
      :top='top'
      :before-close="handleCloseBefore"
    >
    <slot></slot>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "egis-dialog",
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    modal: {
      type: Boolean,
      default: false
    },
    fullscreen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  methods: {
    handleCloseBefore() {
      this.$emit("handleClose", false);
    }
  }
};
</script>

<style lang='less' scoped>
/deep/.el-dialog {
  margin: 0 auto;
}
.dialog-option-btn{
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
    i{
      margin-right:10px;
        &:hover{
        color:#00a0e9;
      }
    }
}
</style>