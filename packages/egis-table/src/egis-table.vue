<template>
  <el-table
    ref="multipleTable"
    :data="tableData"
    border
    tooltip-effect="dark"
    style="width: 100%;"
    @selection-change="handleSelectionChange"
  >
    <el-table-column type="index" width="55" :label='indexText' align="center" v-if="isIndex"></el-table-column>
    <el-table-column type="selection" width="55" align="center" v-if="isAllSelect"></el-table-column>
    <el-table-column
      v-for="(item,i) in headerData"
      :key="i"
      :align="item.align || 'left'"
      :label="item.label"
      :show-overflow-tooltip="item.showOverflowTooltip"
      :width="item.width"
      :min-width="item.minWidth"
      :sortable="item.isSortable"
      :fixed="i>6?'right':false"
    >
      <!-- 可编辑型表格 -->
      <template slot-scope="scope" 
        v-if="curDisColumn.includes(item.label)">
        <div v-if="editable">
          <!-- 输入框 -->
          <el-input v-if="item.type === 'input'" v-model="scope.row[item.relativeTable]"></el-input>
          <!-- 单选框 -->
          <el-radio-group v-model="scope.row[item.relativeTable]" v-else-if="item.type === 'radio'">
            <el-radio v-for="it in item.children" :key="it.id" :value="it.id" :label="it.name"></el-radio>
          </el-radio-group>
          <!-- 复选框 -->
          <el-checkbox-group
            v-model="scope.row[item.relativeTable]"
            v-else-if="item.type === 'checkbox'"
          >
            <el-checkbox v-for="it in item.children" :key="it.id" :label="it.name"></el-checkbox>
          </el-checkbox-group>
          <!-- 下拉框 -->
          <el-select
            v-model="scope.row[item.relativeTable]"
            placeholder="请选择"
            v-else-if="item.type === 'select'"
          >
            <el-option v-for="it in item.children" :key="it.id" :label="it.name" :value="it.id"></el-option>
          </el-select>
          <!-- 日期 -->
          <el-date-picker
            v-else-if="item.type === 'dateTime'"
            v-model="scope.row[item.relativeTable]"
            type="date"
            placeholder="选择日期"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
          <!-- 行数据操作按钮 -->
          <div v-else-if="item.type === 'optionBtn'">
            <slot :item="scope.row"></slot>
          </div>
          <span v-else>{{scope.row[item.relativeTable]}}</span>
        </div>

        <!-- 不可编辑型表格 -->
        <div v-else>
          <div v-if="item.type === 'optionBtn'">
            <slot :item="scope.row"></slot>
          </div>
          <span>{{Array.isArray(scope.row[item.relativeTable])?String(scope.row[item.relativeTable]):scope.row[item.relativeTable]}}</span>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
    name:'egis-table',
    props: {
    //表格渲染数据
        tableData: {
            type: Array,
            default: () => []
        },
        //表头数据
        headerData: {
            type: Array,
            default: () => []
        },
        //当前显示列的表头
        curDisColumn: {
            type: Array,
            default: () => []
        },
        //是否支持全选
        isAllSelect: {
            type: Boolean,
            default: true
        },
        //是否支持编辑功能
        editable: {
            type: Boolean,
            default: false
        },
        //isAllSelect为true时  是否默认全选
        isDefaultAllSelect: {
            type: Boolean,
            default: true
        },
        //isIndex  是否显示序号
        isIndex: {
            type: Boolean,
            default: false
        },
        //indexText  是否显示序号
        indexText: {
            type: String,
            default: '序号'
        }
    },
    data() {
        return {}
    },
    mounted() {
        //支持全选功能的情况下 默认全选
        if (this.isAllSelect && this.isDefaultAllSelect) {
            this.toggleSelection(this.tableData)
        }
    },
    methods: {
    //表格全选
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row)
                })
            } else {
                this.$refs.multipleTable.clearSelection()
            }
        },
        //表格筛选
        handleSelectionChange(val) {
            this.$emit("getAllSelectData", val)
        }
    }
}
</script>

<style lang='less' scoped>
/deep/.el-button--mini, .el-button--mini.is-round{
  padding:2px 4px!important;
}
/deep/.el-input__inner{
  text-align: center;
}
/deep/.el-date-editor.el-input, .el-date-editor.el-input__inner{
  width:220px;
}
/deep/.el-input__inner{
  line-height:30px;
  height:30px;
}
/deep/.el-input__icon{
  line-height:30px;
}
/deep/.el-input--prefix .el-input__inner{
  margin-left: 0;
}
/deep/.el-input--suffix .el-input__inner{
  margin-right: 0;
}
/deep/.el-table .cell.el-tooltip{
  width:200px;
}
/deep/.el-date-editor.el-input, .el-date-editor.el-input__inner{
  width:185px;
}
/deep/.el-radio{
  margin-right:5px;
}
/deep/.el-radio__label{
  padding-left:5px;
}
</style>