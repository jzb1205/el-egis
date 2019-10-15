<template>
    <egis-table
      :tableData="tableData"
      :headerData="headerData"
      :curDisColumn="curDisColumn"
      @getAllSelectData="getAllSelectData"
      :isAllSelect="isAllSelect"
      :isIndex='isIndex'
      :indexText='indexText'
      :editable="editable"
      :isDefaultAllSelect="isDefaultAllSelect"
    >
      <div slot-scope="props">
        <el-button type="primary" size="mini" @click="getData(props)">详细</el-button>
      </div>
    </egis-table>
</template>

<script>
export default {
    data(){
        return{
            
        /**
         * 二次封装表格参数
         */
        //表格数据
        tableData: [
            {
            unit: "城区1",
            belong: " 选项一",
            line: ["选项一", "选项二"],
            pbmc: "2019-10-10",
            once: 72,
            time: "选项一",
            bz: "双方都撒爱护她人生如同",
            unitLael: "单位"
            },
            {
            unit: "城区2",
            belong: " 选项一",
            line: ["选项一"],
            pbmc: "2019-10-10",
            once: 18,
            time: "选项一",
            bz: "双方都撒爱护她人生如同",
            unitLael: "单位"
            },
            {
            unit: "城区3",
            belong: " 选项一",
            line: ["选项一"],
            pbmc: "2019-10-10",
            once: 52,
            time: "选项一",
            bz: "双方都撒爱护她人生如同",
            unitLael: "单位"
            },
            {
            unit: "城区4",
            belong: " 选项一",
            line: ["选项一"],
            pbmc: "2019-10-10",
            once: 130,
            time: "选项一",
            bz: "双方都撒爱护她人生如同",
            unitLael: "单位"
            },
            {
            unit: "城区5",
            belong: " 选项一",
            line: ["选项一"],
            pbmc: "2019-10-10",
            once: 230,
            time: "选项一",
            bz: "双方都撒爱护她人生如同",
            unitLael: "单位"
            },
            {
            unit: "城区6",
            belong: " 选项一",
            line: ["选项一"],
            pbmc: "2019-10-10",
            once: 65,
            time: "选项一",
            bz: "双方都撒爱护她人生如同",
            unitLael: "单位"
            },
            {
            unit: "城区7",
            belong: " 选项一",
            line: ["选项一"],
            pbmc: "2019-10-10",
            once: 47,
            time: "选项一",
            bz: "双方都撒爱护她人生如同",
            unitLael: "单位"
            },
            {
            unit: "城区8",
            belong: " 选项一",
            line: ["选项一"],
            pbmc: "2019-10-10",
            once: 69,
            time: "选项一",
            bz: "双方都撒爱护她人生如同",
            unitLael: "单位"
            }
        ],
        multipleSelection: [], //多选
        curDisColumn: [], //当前表头列表
        headerData: [
            //表头列表
            /**
             * @relativeTable  {string} //关联表格渲染字段
             * @label  {string} //表头名称
             * @input  {string} //列数据可操作类型 默认disabled  input select checkbox radio disabled dataTime
             * @align {string} //列数据水平对齐方式 默认left  left  right center
             * @showOverflowTooltip {bool} //列数据水平对齐方式 默认left  left  right center
             * @width {number} //列宽
             * @min-width {number} //列最小宽
             * @sortable {bool} //是否支持排序   默认false
             */
            {
            relativeTable: "unit",
            label: "单位",
            type: "input",
            align: "center",
            showOverflowTooltip: true,
            width: "",
            minWidth: "180",
            sortable: false
            },
            {
            relativeTable: "pbmc",
            label: "配变名称",
            type: "dateTime",
            align: "center",
            showOverflowTooltip: false,
            width: "240",
            minWidth: "120",
            sortable: false
            },
            {
            relativeTable: "once",
            label: "停电累计次数",
            type: "input",
            align: "center",
            showOverflowTooltip: true,
            width: "",
            minWidth: "180",
            sortable: false
            },
            {
            relativeTable: "time",
            label: "停电累计时长（分钟）",
            type: "input",
            align: "center",
            showOverflowTooltip: true,
            width: "",
            minWidth: "180",
            sortable: false
            },
            {
            relativeTable: "bz",
            label: "备注",
            type: "input",
            align: "center",
            showOverflowTooltip: true,
            width: "",
            minWidth: "180",
            sortable: false
            }
        ],
        isAllSelect: true, //是否支持全选
        isDefaultAllSelect: true, //isAllSelect为true时  是否默认全选 isAllSelect为false时 isDefaultAllSelect无效
        editable: true, //表格是否支持编辑
        isIndex:true,
        indexText:'排序'
        }
    },
    created() {
        this.curDisColumn = this.headerData.map(it => it.label);
    },
    methods:{
        //获取选择数据
        getAllSelectData(val) {
            this.multipleSelection = Object.assign([], val);
        },
        //获取表格当前展示列
        getColumnChange(val) {
            this.curDisColumn = Object.assign([], val);
        },
        //通过表格按钮操作获取数据
        getData(props) {
            console.log(props);
        },
    }
}
</script>

<style>

</style>