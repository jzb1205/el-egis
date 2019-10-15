<template>
  <div class="egis-dialog-class">
    <el-button type="text" @click="dialogVisible = !dialogVisible">点击打开 Dialog</el-button>
    <egis-dialog v-el-drag-dialog :dialogVisible='dialogVisible' @handleClose='handleClose'>
        <slot>
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary">确 定</el-button>
        </slot>
    </egis-dialog>
  </div>
</template>

<script>
import elDragDialog from './../../directive/el-drag-dialog'
export default {
  directives: {
    elDragDialog,
  },
  data() {
    return {
      dialogVisible:false,
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(() => {
          this.dialogVisible = done
        })
        .catch(() => {
          this.dialogVisible = done
        });
    }
  }
};
</script>

<style>
</style>
